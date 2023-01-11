import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/get-feed.action'
import {Action, createReducer, on} from '@ngrx/store'
import {FeedStateInterface} from './../types/feed-state.interface'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state, {feed}) => ({
    ...state,
    isLoading: false,
    error: null,
    data: feed,
  })),
  on(getFeedFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
)

export const reducers = (state: FeedStateInterface, action: Action) => {
  return feedReducer(state, action)
}
