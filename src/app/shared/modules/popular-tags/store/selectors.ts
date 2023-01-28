import {AppStateInterface} from 'src/app/shared/types/app-state.interface'
import {PopularTagsStateInterface} from './../types/popular-tags-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('popularTags')

export const tagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state) => state.tags
)

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state) => state.isLoading
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state) => state.error
)
