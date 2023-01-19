import {Component, Input} from '@angular/core'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
    @Input()
    total: number

    @Input()
    limit: number

    @Input()
    url: string

    @Input()
    currentPage: number
    
}
