import {catchError, map, of, switchMap} from 'rxjs'
import {AuthService} from './../../services/auth.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from './../actions/update-current-user.action'

@Injectable()
export class UpdateCurrentUserEffect {
  updateCurrentUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({currentUser}) =>
        this.authService.updateCurrentUser(currentUser).pipe(
          map((currentUser) => updateCurrentUserSuccessAction({currentUser})),
          catchError(({error}) =>
            of(updateCurrentUserFailureAction({errors: error.errors}))
          )
        )
      )
    )
  )

  constructor(private action$: Actions, private authService: AuthService) {}
}
