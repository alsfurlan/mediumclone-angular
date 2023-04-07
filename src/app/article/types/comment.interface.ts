import {AuthorInterface} from 'src/app/shared/types/author.interface'

export interface CommentInterface {
  id: number
  body: string
  createdAt: string
  updatedAt: string
  author: AuthorInterface
}
