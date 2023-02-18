import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  errors: ErrorMessagesInterface | null
}
