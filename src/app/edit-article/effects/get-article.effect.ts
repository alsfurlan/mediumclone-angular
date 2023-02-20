import {catchError, map, of, switchMap} from 'rxjs'
import {ArticleService} from './../../shared/services/article.service'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action'

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) =>
        this.articleService.getArticle(slug).pipe(
          map((article) => getArticleSuccessAction({article})),
          catchError(() => of(getArticleFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}
