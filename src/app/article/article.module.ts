import {ArticleComponent} from './components/article.component'
import {GetArticleEffect} from './store/effects/get-article.effect'
import {ArticleService} from './../shared/services/article.service'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from './store/reducers'
import {RouterModule} from '@angular/router'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ErrorMessageModule} from '../shared/modules/error-message/error-message.module'
import {TagListModule} from '../shared/modules/tag-list/tag-list.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  declarations: [ArticleComponent],
  providers: [ArticleService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
})
export class ArticleModule {}
