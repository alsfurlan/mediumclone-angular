import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './../actions/get-article.action'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './../actions/update-article.action'
import {Action, createReducer, on} from '@ngrx/store'
import {EditArticleStateInterface} from './../types/edit-article-state.interface'
import {routerNavigationAction} from '@ngrx/router-store'

const initialState: EditArticleStateInterface = {
  article: null,
  errors: null,
  isLoading: false,
  isSubmitting: false,
}

const editArticleReduer = createReducer(
  initialState,
  on(updateArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccessAction, (state, {article}) => ({
    ...state,
    isSubmitting: false,
    article,
  })),
  on(updateArticleFailureAction, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    errors,
  })),
  on(getArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, {article}) => ({
    ...state,
    isLoading: false,
    article,
  })),
  on(getArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, () => initialState)
)

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReduer(state, action)
}
