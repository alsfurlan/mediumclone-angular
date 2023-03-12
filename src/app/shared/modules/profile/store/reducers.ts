import {Action, createReducer, on} from '@ngrx/store'
import {ProfileStateInterface} from './../types/profile-state.interface'
import {
  getProfileAction,
  getProfileFailureAction,
  getProfileSuccessAction,
} from './actions/get-profile.action'

const initialState: ProfileStateInterface = {
  profile: null,
  isLoading: false,
  error: null,
}
const profileReducer = createReducer(
  initialState,
  on(getProfileAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getProfileSuccessAction, (state, {profile}) => ({
    ...state,
    profile,
    isLoading: false,
  })),
  on(getProfileFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
)

export const reducers = (state: ProfileStateInterface, action: Action) =>
  profileReducer(state, action)
