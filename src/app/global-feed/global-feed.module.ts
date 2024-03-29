import {FeedTogglerModule} from './../shared/modules/feed-toggler/feed-toggler.module'
import {PopularTagsModule} from './../shared/modules/popular-tags/popular-tags.module'
import {BannerModule} from './../shared/modules/banner/banner.module'
import {FeedModule} from './../shared/modules/feed/feed.module'
import {Route, RouterModule} from '@angular/router'
import {GlobalFeedComponent} from './global-feed.component'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

const routes: Route[] = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
