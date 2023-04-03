import {ArticleCommentInterface} from '../../types/article-comment.interface'
import {Component, Input} from '@angular/core'

@Component({
  selector: 'mc-article-comment',
  templateUrl: './article-comment.component.html',
})
export class ArticleCommentComponent {
  @Input()
  comment: ArticleCommentInterface
}
