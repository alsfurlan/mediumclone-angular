import {CurrentUserInterface} from './../../../shared/types/current-user.interface'
import {ActionTypes} from './../action-types'
import {createAction, props} from '@ngrx/store'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
