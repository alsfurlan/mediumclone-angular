import {ArticleService} from './../shared/services/article.service'
import {EditArticleComponent} from './components/edit-article/edit-article.component'
import {Route, RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {ArticleFormModule} from './../shared/modules/article-form/article-form.module'
import {EffectsModule} from '@ngrx/effects'
import {NgModule} from '@angular/core'
import {EditArticleService} from './services/edit-article.service'
import {UpdateArticleEffect} from './effects/update-article.effects'
import {GetArticleEffect} from './effects/get-article.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {LoadingModule} from '../shared/modules/loading/loading.module'

const routes: Route[] = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    LoadingModule,
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, ArticleService],
})
export class EditArticleModule {}
