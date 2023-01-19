import {UtilsService} from './../../services/utils.service'
import {RouterModule} from '@angular/router'
import {PaginationComponent} from './pagination.component'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
