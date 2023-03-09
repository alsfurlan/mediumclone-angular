import {PersistanceService} from './../../../shared/services/persistance.service'
import {switchMap, tap} from 'rxjs'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {logoutAction} from '../actions/logout.action'
import {Router} from '@angular/router'

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '')
          this.router.navigate([''])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
