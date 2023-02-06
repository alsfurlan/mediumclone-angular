import {RouterModule} from '@angular/router'
import {TagFeedComponent} from './tag-feed.component'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
]
@NgModule({
  declarations: [TagFeedComponent],
  exports: [TagFeedComponent],
  imports: [
    CommonModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
    RouterModule.forChild(routes),
  ],
})
export class TagFeedModule {}
