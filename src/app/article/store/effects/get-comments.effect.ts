import {
  getCommentsAction,
  getCommentsFailureAction,
  getCommentsSuccessAction,
} from './../actions/get-comments.actions'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {CommentService} from '../../services/comment.service'

@Injectable()
export class GetCommentsEffect {
  getComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentsAction),
      switchMap(({slug}) =>
        this.commentService.getComments(slug).pipe(
          map((comments) => getCommentsSuccessAction({comments})),
          catchError(() => of(getCommentsFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) {}
}
