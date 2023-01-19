import {ActivatedRoute, Params, Router} from '@angular/router'
import {environment} from './../../../../../../environments/environment.prod'
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors'
import {GetFeedResponseInterface} from './../../types/get-feed-response.interface'
import {getFeedAction} from './../../store/actions/get-feed.action'
import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription, tap} from 'rxjs'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  limit: number
  baseUrl: string
  subscriptions: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListener()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.limit = environment.limit
    this.baseUrl = this.router.url.split('?')[0]
    this.subscriptions = new Subscription()
  }

  initializeListener() {
    this.subscriptions.add(
      this.activatedRoute.queryParams
        .pipe(
          tap(({page}: Params) => {
            this.currentPage = +page || 1
          })
        )
        .subscribe()
    )
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
