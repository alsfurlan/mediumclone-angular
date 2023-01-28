import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions'
import {Action, createReducer, on} from '@ngrx/store'
import {PopularTagsStateInterface} from './../types/popular-tags-state.interface'

const initialState: PopularTagsStateInterface = {
  tags: null,
  isLoading: false,
  error: null,
}

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsSuccessAction, (state, {tags}) => ({
    ...state,
    isLoading: false,
    tags,
  })),
  on(getPopularTagsFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
)

export const reducers = (state: PopularTagsStateInterface, action: Action) =>
  popularTagsReducer(state, action)
