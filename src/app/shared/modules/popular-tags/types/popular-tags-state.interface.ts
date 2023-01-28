import {TagType} from 'src/app/shared/types/tag.interface'

export interface PopularTagsStateInterface {
  tags: TagType[] | null
  isLoading: boolean
  error: string | null
}
