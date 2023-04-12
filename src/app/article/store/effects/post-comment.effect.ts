import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {CommentService} from '../../services/comment.service'
import {
  postCommentAction,
  postCommentFailureAction,
  postCommentSuccessAction,
} from '../actions/post-comment.actions'
import {catchError, map, of, switchMap} from 'rxjs'

@Injectable()
export class PostCommentEffect {
  postComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postCommentAction),
      switchMap(({slug, postComment}) =>
        this.commentService.postComment(slug, postComment).pipe(
          map((comment) => postCommentSuccessAction({comment})),
          catchError(() => of(postCommentFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) {}
}
