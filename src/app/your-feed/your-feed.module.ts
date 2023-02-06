import {RouterModule} from '@angular/router'
import {YourFeedComponent} from './your-feed.component'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module'
import {FeedModule} from '../shared/modules/feed/feed.module'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]
@NgModule({
  declarations: [YourFeedComponent],
  exports: [YourFeedComponent],
  imports: [
    CommonModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
    FeedModule,
    RouterModule.forChild(routes),
  ],
})
export class YourFeedModule {}
