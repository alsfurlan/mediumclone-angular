import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from './../error-message/error-message.module'
import {LoadingModule} from './../loading/loading.module'
import {PopularTagsComponent} from './popular-tags.component'
import {GetPopularTagsEffect} from './store/effects'
import {EffectsModule} from '@ngrx/effects'
import {PopularTagsService} from './popular-tags.service'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    LoadingModule,
    ErrorMessageModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  providers: [PopularTagsService],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
