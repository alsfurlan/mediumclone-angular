import {AppStateInterface} from 'src/app/shared/types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'
import {ProfileStateInterface} from '../types/profile-state.interface'

export const profileFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ProfileStateInterface
>('profile')

export const profileSelector = createSelector(
  profileFeatureSelector,
  ({profile}) => profile
)

export const isLoadingSelector = createSelector(
  profileFeatureSelector,
  ({isLoading}) => isLoading
)

export const errorSelector = createSelector(
    profileFeatureSelector,
    ({error}) => error
  )
  