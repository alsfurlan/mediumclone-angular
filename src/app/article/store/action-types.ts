export enum ActionTypes {
  GET_ARTICLE = '[Article] Get article',
  GET_ARTICLE_SUCCESS = '[Article] Get article with success',
  GET_ARTICLE_FAILURE = '[Article] Get article with failure',

  DELETE_ARTICLE = '[Article] Delete article',
  DELETE_ARTICLE_SUCCESS = '[Article] Delete article with success',
  DELETE_ARTICLE_FAILURE = '[Article] Delete article with failure',

  GET_COMMENTS = '[Article] Get comments',
  GET_COMMENTS_SUCCESS = '[Article] Get comments with success',
  GET_COMMENTS_FAILURE = '[Article] Get comments with failure',

  DELETE_COMMENT = '[Article] Delete comment',
  DELETE_COMMENT_SUCCESS = '[Article] Delete comment with success',
  DELETE_COMMENT_FAILURE = '[Article] Delete comment with failure',

  POST_COMMENT = '[Article] Post a comment',
  POST_COMMENT_SUCCESS = '[Article] Post a comment with success',
  POST_COMMENT_FAILURE = '[Article] Post a comment with failure',
}
