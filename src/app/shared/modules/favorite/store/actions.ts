import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from './action-types'

export const favoriteAction = createAction(
  ActionTypes.FAVORITE,
  props<{article: ArticleInterface}>()
)

export const favoriteSuccessAction = createAction(
  ActionTypes.FAVORITE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const favoriteFailureAction = createAction(ActionTypes.FAVORITE_FAILURE)

export const unfavoriteAction = createAction(
  ActionTypes.UNFAVORITE,
  props<{article: ArticleInterface}>()
)

export const unfavoriteSuccessAction = createAction(
  ActionTypes.UNFAVORITE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const unfavoriteFailureAction = createAction(ActionTypes.UNFAVORITE_FAILURE)
