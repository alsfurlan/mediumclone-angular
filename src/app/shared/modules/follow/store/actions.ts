import {ProfileInterface} from './../../profile/types/profile.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from './action-types'

export const followAction = createAction(
  ActionTypes.FOLLOW,
  props<{username: string}>()
)
export const followSuccessAction = createAction(ActionTypes.FOLLOW_SUCCESS)
export const followFailureAction = createAction(ActionTypes.FOLLOW_FAILURE)

export const unfollowAction = createAction(
  ActionTypes.UNFOLLOW,
  props<{username: string}>()
)
export const unfollowSuccessAction = createAction(ActionTypes.UNFOLLOW_SUCCESS)
export const unfollowFailureAction = createAction(ActionTypes.UNFOLLOW_FAILURE)

export const initFollowingAction = createAction(
  ActionTypes.INIT_FOLLOWING,
  props<{following: boolean}>()
)
