import { FeedComponent } from './feed.component';
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

@NgModule({
  imports: [CommonModule],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class FeedModule {}
