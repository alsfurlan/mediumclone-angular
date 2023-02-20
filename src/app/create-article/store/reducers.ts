import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/create-article.action'
import {CreateArticleStateInterface} from './../types/create-article-state.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'

const initialState: CreateArticleStateInterface = {
  errors: null,
  isSubmitting: false,
}

const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state) => ({...state, isSubmitting: true})),
  on(createArticleSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleFailureAction, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    errors,
  })),
  on(routerNavigationAction, () => initialState)
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}
