import {TagType} from 'src/app/shared/types/tag.interface'
import {ActionTypes} from './action-types'
import {createAction, props} from '@ngrx/store'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{tags: TagType[]}>()
)

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
