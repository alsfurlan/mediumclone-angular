import {catchError, map, of, switchMap, tap} from 'rxjs'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {
  followAction,
  followSuccessAction,
  followFailureAction,
  unfollowSuccessAction,
  unfollowFailureAction,
  unfollowAction,
} from './actions'
import {FollowService} from '../services/follow.service'

@Injectable()
export class FollowEffects {
  follow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(followAction),
      switchMap(({username}) =>
        this.followService.follow(username).pipe(
          map(() => followSuccessAction()),
          catchError(() => of(followFailureAction()))
        )
      )
    )
  )

  unfollow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unfollowAction),
      switchMap(({username}) =>
        this.followService.unfollow(username).pipe(
          map(() => unfollowSuccessAction()),
          catchError(() => of(unfollowFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private followService: FollowService
  ) {}
}
