import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  deleteCommentAction,
  deleteCommentFailureAction,
  deleteCommentSuccessAction,
} from '../actions/delete-comment.actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {CommentService} from '../../services/comment.service'

@Injectable()
export class DeleteCommentEffect {
  deleteComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCommentAction),
      switchMap(({slug, id}) =>
        this.commentService.deleteComment(slug, id).pipe(
          map(() => deleteCommentSuccessAction({id})),
          catchError(() => of(deleteCommentFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) {}
}
