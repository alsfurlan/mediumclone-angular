import {ArticleInterface} from './../../shared/types/article.interface'
import {CommentInterface} from './comment.interface'

export interface ArticleStateInterface {
  isLoading: boolean
  error: string | null
  data: ArticleInterface | null
  comments: CommentInterface[]
}
