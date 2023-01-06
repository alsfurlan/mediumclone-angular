import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {AuthService} from './../../services/auth.service'
import {catchError, map, of, switchMap} from 'rxjs'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './../actions/get-current-user.actions'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        
        const token = this.persistanceService.get('accessToken')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) =>
            getCurrentUserSuccessAction({currentUser})
          ),
          catchError(() => of(getCurrentUserFailureAction()))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
