import {CommentInterface} from './../../types/comment.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {PostComment} from '../../types/post-comment.interface'

export const postCommentAction = createAction(
  ActionTypes.POST_COMMENT,
  props<{slug: string; postComment: PostComment}>()
)

export const postCommentSuccessAction = createAction(
  ActionTypes.POST_COMMENT_SUCCESS,
  props<{comment: CommentInterface}>()
)

export const postCommentFailureAction = createAction(
  ActionTypes.POST_COMMENT_FAILURE
)
