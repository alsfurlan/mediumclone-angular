import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from './../../auth/store/actions/update-current-user.action'
import {Action, createReducer, on} from '@ngrx/store'
import {SettingsStateInterface} from './../types/settings-state.interface'

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  errors: null,
}

const settingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateCurrentUserSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
    errors: null,
  })),
  on(updateCurrentUserFailureAction, (state, {errors}) => ({
    ...state,
    isSubmitting: false,
    errors,
  }))
)

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducer(state, action);
}
