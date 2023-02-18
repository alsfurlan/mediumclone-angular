import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'
import {ArticleInterface} from './../../../shared/types/article.interface'
import {ArticleInputInterface} from './../../../shared/types/article-input.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types.enum'

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{articleInput: ArticleInputInterface}>()
)
export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)
export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: ErrorMessagesInterface}>()
)
