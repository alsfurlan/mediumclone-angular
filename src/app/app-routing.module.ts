import {TagFeedComponent} from './tag-feed/tag-feed.component'
import {YourFeedComponent} from './your-feed/your-feed.component'
import {GlobalFeedComponent} from './global-feed/global-feed.component'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
