import {ArticleInterface} from './../../shared/types/article.interface'
import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'

export interface EditArticleStateInterface {
  article: ArticleInterface | null
  isLoading: boolean
  isSubmitting: boolean
  errors: ErrorMessagesInterface | null
}
