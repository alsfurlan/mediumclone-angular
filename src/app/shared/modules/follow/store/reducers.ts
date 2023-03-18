import {routerNavigationAction} from '@ngrx/router-store'
import {Action, createReducer, on} from '@ngrx/store'
import {getProfileSuccessAction} from '../../profile/store/actions/get-profile.action'
import {
  followAction,
  followFailureAction,
  followSuccessAction,
  initFollowingAction,
  unfollowAction,
  unfollowFailureAction,
  unfollowSuccessAction,
} from './actions'
import {FollowStateInterface} from './state'

const initialState: FollowStateInterface = {
  isSubmitting: false,
  following: false,
}

const followReducer = createReducer(
  initialState,
  on(initFollowingAction, (state, {following}) => ({
    ...state,
    following,
  })),
  on(followAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(followSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    following: true,
  })),
  on(followFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    following: false,
  })),
  on(unfollowAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(unfollowSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
    following: false,
  })),
  on(unfollowFailureAction, (state) => ({
    ...state,
    isSubmitting: false,
    following: true,
  })),
  on(routerNavigationAction, () => initialState)
)

export const reducers = (state: FollowStateInterface, action: Action) =>
  followReducer(state, action)
