import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/create-article.action'
import {CreateArticleStateInterface} from './../types/create-article-state.interface'
import {Action, createReducer, on} from '@ngrx/store'

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
    errors: null    
  })),
  on(createArticleFailureAction, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    errors,
  }))
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}
