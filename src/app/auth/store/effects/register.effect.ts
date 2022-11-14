import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {AuthService} from '../../services/auth.service'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.actions'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            registerSuccessAction({currentUser})
          ),
          catchError(({error}: HttpErrorResponse) =>
            of(registerFailureAction({errors: error.errors}))
          )
        )
      )
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
