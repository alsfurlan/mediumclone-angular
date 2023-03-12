import {catchError, map, of, switchMap} from 'rxjs'
import {ProfileService} from './../../services/profile.service'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  getProfileAction,
  getProfileFailureAction,
  getProfileSuccessAction,
} from '../actions/get-profile.action'

@Injectable()
export class GetProfileEffect {
  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfileAction),
      switchMap(({slug}) =>
        this.profileService.getProfile(slug).pipe(
          map((profile) => getProfileSuccessAction({profile})),
          catchError(() => of(getProfileFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
