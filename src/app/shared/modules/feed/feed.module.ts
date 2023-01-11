import {HttpClientModule} from '@angular/common/http'
import {GetFeedEffect} from './store/effects/get-feed.effect'
import {EffectsModule} from '@ngrx/effects'
import {FeedService} from './services/feed.service'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FeedComponent} from './components/feed/feed.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
