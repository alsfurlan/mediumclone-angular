import {UtilsService} from './../../services/utils.service'
import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() total: number
  @Input() limit: number
  @Input() url: string
  @Input() currentPage: number

  pagesCount: number
  pages: number[]

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
