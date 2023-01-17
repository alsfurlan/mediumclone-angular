import {CommonModule} from '@angular/common'
import {BannerComponent} from './banner.component'
import {NgModule} from '@angular/core'

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
