import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/auth-state.interface'
import {registerAction} from './actions/register.actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
)

export const reducers = (state: AuthStateInterface, action: Action) => {
  return authReducer(state, action)
}
