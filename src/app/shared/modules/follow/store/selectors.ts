import {FollowStateInterface} from './state'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

const followFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FollowStateInterface
>('follow')

export const isSubmittingSelector = createSelector(
  followFeatureSelector,
  (state) => state.isSubmitting
)

export const followingSelector = createSelector(
  followFeatureSelector,
  (state) => state.following
)
