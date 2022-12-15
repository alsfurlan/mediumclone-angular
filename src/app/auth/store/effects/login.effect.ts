import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {AuthService} from '../../services/auth.service'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '../actions/login.actions'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) =>
        this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return loginSuccessAction({currentUser})
          }),
          catchError(({error}: HttpErrorResponse) =>
            of(loginFailureAction({errors: error.errors}))
          )
        )
      )
    )
  )

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
