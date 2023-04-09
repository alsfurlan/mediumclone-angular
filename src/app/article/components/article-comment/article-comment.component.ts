import {Store} from '@ngrx/store'
import {CommentInterface} from '../../types/comment.interface'
import {Component, Input} from '@angular/core'
import {deleteCommentAction} from '../../store/actions/delete-comment.actions'

@Component({
  selector: 'mc-article-comment',
  templateUrl: './article-comment.component.html',
})
export class ArticleCommentComponent {
  @Input()
  comment: CommentInterface

  @Input()
  slug: string

  constructor(private store: Store) {}

  onDelete() {
    this.store.dispatch(
      deleteCommentAction({slug: this.slug, id: this.comment.id})
    )
  }
}
