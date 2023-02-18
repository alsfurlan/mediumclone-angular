import {createArticleAction} from './../../store/actions/create-article.action'
import {select, Store} from '@ngrx/store'
import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'
import {Observable} from 'rxjs'
import {ArticleInputInterface} from './../../../shared/types/article-input.interface'
import {Component, OnInit} from '@angular/core'
import {errorsSelector, isSubmittingSelector} from '../../store/selectors'

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [''],
  }
  isSubmitting$: Observable<boolean>
  errors$: Observable<ErrorMessagesInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
