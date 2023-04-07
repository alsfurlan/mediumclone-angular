import {CommentInterface} from '../../types/comment.interface'
import {Component, Input} from '@angular/core'

@Component({
  selector: 'mc-article-comment',
  templateUrl: './article-comment.component.html',
})
export class ArticleCommentComponent {
  @Input()
  comment: CommentInterface
}
