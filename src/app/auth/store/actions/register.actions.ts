import {createAction, props} from '@ngrx/store'
import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {RegisterRequestInterface} from '../../types/register-request.interface'
import {ActionTypes} from '../action-types'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: ErrorMessagesInterface}>()
)
