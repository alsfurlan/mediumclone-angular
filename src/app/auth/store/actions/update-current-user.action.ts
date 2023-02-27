import {CurrentUserInputInterface} from './../../../shared/types/current-user-input.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{currentUser: CurrentUserInputInterface}>()
)

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{errors: ErrorMessagesInterface}>()
)
