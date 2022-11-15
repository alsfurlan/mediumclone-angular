import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: ErrorMessagesInterface
}
