import {DeleteArticleEffect} from './delete-article.effect'
import {DeleteCommentEffect} from './delete-comment.effect'
import {GetArticleEffect} from './get-article.effect'
import {GetCommentsEffect} from './get-comments.effect'
import {PostCommentEffect} from './post-comment.effect'

export const effects = [
  GetArticleEffect,
  DeleteArticleEffect,
  GetCommentsEffect,
  DeleteCommentEffect,
  PostCommentEffect,
]
