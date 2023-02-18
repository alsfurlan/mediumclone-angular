import {ErrorMessagesModule} from './../shared/modules/error-messages/error-messages.module'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {CreateArticleComponent} from './components/create-article/create-article.component'
import {ArticleFormModule} from '../shared/modules/article-form/article-form.module'
import {CreateArticleService} from './services/create-article.service'
import {CreateArticleEffect} from './store/effects/create-article.effects'
import {reducers} from './store/reducers'

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
    ErrorMessagesModule,
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
