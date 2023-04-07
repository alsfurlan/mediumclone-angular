import {CommentInterface} from '../../types/comment.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'

export const getCommentsAction = createAction(
  ActionTypes.GET_COMMENTS,
  props<{slug: string}>()
)

export const getCommentsSuccessAction = createAction(
  ActionTypes.GET_COMMENTS_SUCCESS,
  props<{comments: CommentInterface[]}>()
)

export const getCommentsFailureAction = createAction(
  ActionTypes.GET_COMMENTS_FAILURE
)
