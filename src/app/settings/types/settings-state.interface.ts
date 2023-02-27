import { ErrorMessagesInterface } from 'src/app/shared/types/error-messages.interface';

export interface SettingsStateInterface {
    isSubmitting: boolean
    errors: ErrorMessagesInterface | null
}