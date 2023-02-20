import {ArticleInterface} from '../../shared/types/article.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../store/action-types.enum'

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
)
export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)
export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)
