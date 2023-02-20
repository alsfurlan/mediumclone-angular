import {HttpErrorResponse} from '@angular/common/http'
import {EditArticleService} from './../services/edit-article.service'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './../actions/update-article.action'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({slug, articleInput}) =>
        this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article) => updateArticleSuccessAction({article})),
          catchError(({error}: HttpErrorResponse) =>
            of(updateArticleFailureAction(error.errors))
          )
        )
      )
    )
  )

  updateArticleSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({article}) => this.router.navigate(['/articles', article.slug]))
      ),
    {
      dispatch: false,
    }
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private editArticleService: EditArticleService
  ) {}
}
