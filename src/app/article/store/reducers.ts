import {routerNavigationAction} from '@ngrx/router-store'
import {ArticleStateInterface} from './../types/article-state.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/get-article.actions'
import {
  getCommentsFailureAction,
  getCommentsSuccessAction,
} from './actions/get-comments.actions'
import {deleteCommentSuccessAction} from './actions/delete-comment.actions'
import {
  postCommentAction,
  postCommentSuccessAction,
  postCommentFailureAction,
} from './actions/post-comment.actions'

const initialState: ArticleStateInterface = {
  data: null,
  error: null,
  isLoading: false,
  isPostingComment: false,
  comments: null,
}

const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state) => ({...state, isLoading: true})),
  on(getArticleSuccessAction, (state, {article}) => ({
    ...state,
    isLoading: false,
    error: null,
    data: article,
  })),
  on(getArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
    data: null,
  })),
  on(getCommentsSuccessAction, (state, {comments}) => ({...state, comments})),
  on(getCommentsFailureAction, (state) => ({...state, comments: null})),
  on(deleteCommentSuccessAction, (state, action) => ({
    ...state,
    comments: state.comments?.filter((comment) => comment.id !== action.id),
  })),
  on(postCommentAction, (state) => ({
    ...state,
    isPostingComment: true,
  })),
  on(postCommentSuccessAction, (state, action) => ({
    ...state,
    isPostingComment: false,
    comments: [...state.comments, action.comment],
  })),
  on(postCommentFailureAction, (state) => ({
    ...state,
    isPostingComment: false,
  })),
  on(routerNavigationAction, () => initialState)
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
