import {ActivatedRoute, Router} from '@angular/router'
import {getProfileAction} from './../../store/actions/get-profile.action'
import {
  combineLatest,
  filter,
  map,
  Observable,
  skipWhile,
  Subscription,
  tap,
} from 'rxjs'
import {ProfileInterface} from './../../../../types/profile.interface'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {
  errorSelector,
  isLoadingSelector,
  profileSelector,
} from '../../store/selectos'
import {currentUserSelector} from 'src/app/auth/store/selectors'

@Component({
  selector: 'mc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile$: Observable<ProfileInterface>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>
  subscription: Subscription = new Subscription()

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  private initializeListeners(): void {
    this.profile$ = this.store.pipe(select(profileSelector))
    this.subscription.add(
      this.activatedRoute.params
        .pipe(
          filter((params) => params['slug']),
          tap((params) => {
            this.fetchProfile(params['slug'])
          })
        )
        .subscribe()
    )
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(
        select(currentUserSelector),
        filter((user) => !!user)
      ),
      this.store.pipe(
        select(profileSelector),
        filter((profile) => !!profile)
      ),
    ]).pipe(
      map(([currentUser, profile]) => currentUser.username === profile.username)
    )
  }

  private fetchProfile(slug: string): void {
    const isFavoriteRoute = this.router.url.includes('favorites')
    this.apiUrl =
      (isFavoriteRoute ? '/articles?favorited=' : '/articles?author=') + slug
    this.store.dispatch(getProfileAction({slug}))
  }
}
