import {GetArticleEffect} from './store/effects/get-article.effect'
import {ArticleService} from './../shared/services/article.service'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
