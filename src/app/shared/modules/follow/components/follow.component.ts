import {Observable, startWith, Subscription, tap} from 'rxjs'
import {
  followAction,
  initFollowingAction,
  unfollowAction,
} from './../store/actions'
import {ProfileInterface} from '../../../types/profile.interface'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {followingSelector, isSubmittingSelector} from '../store/selectors'

@Component({
  selector: 'mc-follow',
  templateUrl: './follow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowComponent implements OnInit, OnDestroy {
  @Input()
  profile: ProfileInterface

  following: boolean

  isSubmitting$: Observable<boolean>

  subscription: Subscription

  constructor(private store: Store) {
    this.subscription = new Subscription()
  }
  ngOnInit(): void {
    const {following} = this.profile
    this.store.dispatch(initFollowingAction({following}))
    this.subscription.add(
      this.store
        .pipe(
          select(followingSelector),
          tap((following) => {
            this.following = following
          })
        )
        .subscribe()
    )
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  handleFollow() {
    const action = this.following ? unfollowAction : followAction
    const {username} = this.profile
    this.store.dispatch(action({username}))
  }
}
