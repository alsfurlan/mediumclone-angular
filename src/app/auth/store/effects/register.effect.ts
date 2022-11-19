import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
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
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return registerSuccessAction({currentUser})
          }),
          catchError(({error}: HttpErrorResponse) =>
            of(registerFailureAction({errors: error.errors}))
          )
        )
      )
    )
  )

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
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
