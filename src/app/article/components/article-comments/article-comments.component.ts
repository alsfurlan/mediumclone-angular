import {Store, select} from '@ngrx/store'
import {CommentInterface} from '../../types/comment.interface'
import {Component, Input, OnInit} from '@angular/core'
import {getCommentsAction} from '../../store/actions/get-comments.actions'
import {Observable} from 'rxjs'
import {commentsSelector} from '../../store/selectors'

@Component({
  selector: 'mc-article-comments',
  templateUrl: './article-comments.component.html',
})
export class ArticleCommentsComponent implements OnInit {
  @Input()
  slug: string

  comments$: Observable<CommentInterface[]>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.comments$ = this.store.pipe(select(commentsSelector))
  }

  fetchData(): void {
    const {slug} = this
    this.store.dispatch(getCommentsAction({slug}))
  }
}
