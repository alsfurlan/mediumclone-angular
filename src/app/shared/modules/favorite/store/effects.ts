import {
  favoriteFailureAction,
  favoriteSuccessAction,
  unfavoriteFailureAction,
  unfavoriteSuccessAction,
} from './actions'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {FavoriteService} from '../services/favorite.service'
import {ActionTypes} from './action-types'
import {catchError, map, of, switchMap} from 'rxjs'

@Injectable()
export class FavoriteEffects {
  favorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.FAVORITE),
      switchMap(({article}) =>
        this.favoriteService.favorite(article).pipe(
          map((article) => favoriteSuccessAction({article})),
          catchError(() => of(favoriteFailureAction()))
        )
      )
    )
  )

  unfavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.UNFAVORITE),
      switchMap(({article}) =>
        this.favoriteService.unfavorite(article).pipe(
          map((article) => unfavoriteSuccessAction({article})),
          catchError(() => of(unfavoriteFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private favoriteService: FavoriteService
  ) {}
}
