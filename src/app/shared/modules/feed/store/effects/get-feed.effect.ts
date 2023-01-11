import {catchError, map, of, switchMap} from 'rxjs'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './../actions/get-feed.action'
import {FeedService} from './../../services/feed.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'

@Injectable()
export class GetFeedEffect {
  constructor(private actions: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions.pipe(
      ofType(getFeedAction),
      switchMap(({url}) =>
        this.feedService.getFeed(url).pipe(
          map((feed) => getFeedSuccessAction({feed})),
          catchError(() => of(getFeedFailureAction()))
        )
      )
    )
  )
}
