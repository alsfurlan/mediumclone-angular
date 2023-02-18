import {CreateArticleStateInterface} from './../../create-article/types/create-article-state.interface'
import {PopularTagsStateInterface} from './../modules/popular-tags/types/popular-tags-state.interface'
import {FeedStateInterface} from './../modules/feed/types/feed-state.interface'
import {AuthStateInterface} from 'src/app/auth/types/auth-state.interface'
import {ArticleStateInterface} from 'src/app/article/types/article-state.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
}
