import {ProfileInterface} from './profile.interface'

export interface ProfileStateInterface {
  profile: ProfileInterface
  isLoading: boolean
  error: string | null
}
