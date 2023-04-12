import {AppStateInterface} from 'src/app/shared/types/app-state.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'
import {ArticleStateInterface} from '../types/article-state.interface'

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article')

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (state) => state.isLoading
)

export const errorSelector = createSelector(
  articleFeatureSelector,
  (state) => state.error
)

export const articleSelector = createSelector(
  articleFeatureSelector,
  (state) => state.data
)

export const commentsSelector = createSelector(
  articleFeatureSelector,
  (state) => state.comments
)

export const isPostingCommentSelector = createSelector(
  articleFeatureSelector,
  (state) => state.isPostingComment
)
