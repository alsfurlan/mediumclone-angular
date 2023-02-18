import {CreateArticleStateInterface} from './../types/create-article-state.interface'
import {AppStateInterface} from './../../shared/types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'

const createArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>('createArticle')

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (state) => state.isSubmitting
)

export const errorsSelector = createSelector(
  createArticleFeatureSelector,
  (state) => state.errors
)
