import {isPostingCommentSelector} from './../../store/selectors'
import {Store, select} from '@ngrx/store'
import {CurrentUserInterface} from './../../../shared/types/current-user.interface'
import {Component, Input, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {FormBuilder, FormGroup} from '@angular/forms'
import {postCommentAction} from '../../store/actions/post-comment.actions'

@Component({
  selector: 'mc-article-comment-form',
  templateUrl: './article-comment-form.component.html',
})
export class ArticleCommentFormComponent implements OnInit {
  @Input() slug: string

  currentUser$: Observable<CurrentUserInterface>
  form: FormGroup
  isPostingComment$: Observable<boolean>

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.isPostingComment$ = this.store.pipe(select(isPostingCommentSelector))
    this.form = this.formBuilder.group({
      comment: '',
    })
  }

  postComment() {
    this.store.dispatch(
      postCommentAction({
        slug: this.slug,
        postComment: {
          body: this.form.value.comment,
        },
      })
    )
    this.form.reset()
  }
}
