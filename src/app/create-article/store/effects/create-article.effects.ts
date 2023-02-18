import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from './../actions/create-article.action'
import {CreateArticleService} from './../../services/create-article.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {catchError, map, of, switchMap, tap} from 'rxjs'

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleInput}) =>
        this.createArticleService.createArticle(articleInput).pipe(
          map((article) => createArticleSuccessAction({article})),
          catchError(({error}) =>
            of(createArticleFailureAction({errors: error.errors}))
          )
        )
      )
    )
  )

  createArticleSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
