import {DeleteArticleEffect} from './store/effects/delete-article.effect'
import {ArticleComponent} from './components/article/article.component'
import {GetArticleEffect} from './store/effects/get-article.effect'
import {ArticleService as SharedArticleService} from './../shared/services/article.service'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from './store/reducers'
import {RouterModule} from '@angular/router'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ErrorMessageModule} from '../shared/modules/error-message/error-message.module'
import {TagListModule} from '../shared/modules/tag-list/tag-list.module'
import {ArticleService} from './services/article.service'
import {FollowModule} from '../shared/modules/follow/follow.module'
import {ArticleCommentComponent} from './components/article-comment/article-comment.component'
import {ArticleCommentsComponent} from './components/article-comments/article-comments.component'
import {GetCommentsEffect} from './store/effects/get-comments.effect'
import {CommentService} from './services/comment.service'
import {DeleteCommentEffect} from './store/effects/delete-comment.effect'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentsComponent,
    ArticleCommentComponent,
  ],
  providers: [ArticleService, SharedArticleService, CommentService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([
      GetArticleEffect,
      DeleteArticleEffect,
      GetCommentsEffect,
      DeleteCommentEffect,
    ]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    FollowModule,
  ],
})
export class ArticleModule {}
