import {SettingsStateInterface} from './../types/settings-state.interface'
import {AppStateInterface} from './../../shared/types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const settingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('settings')

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  ({isSubmitting}) => isSubmitting
)

export const errorsSelector = createSelector(
  settingsFeatureSelector,
  ({errors}) => errors
)
