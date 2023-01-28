import {Component, Input} from '@angular/core'
import {TagType} from '../../types/tag.interface'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: TagType[]
}
