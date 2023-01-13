import {FeedStateInterface} from './../types/feed-state.interface'
import {AppStateInterface} from './../../../types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed')

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState) => feedState.error
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState) => feedState.data
)
