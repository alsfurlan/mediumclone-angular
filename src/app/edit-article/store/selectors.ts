import {EditArticleStateInterface} from './../types/edit-article-state.interface'
import {AppStateInterface} from './../../shared/types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const editArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('editArticle')

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (state) => state.isSubmitting
)

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (state) => state.isLoading
)

export const errorsSelector = createSelector(
  editArticleFeatureSelector,
  (state) => state.errors
)

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (state) => state.article
)
