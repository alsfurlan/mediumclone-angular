import {ActivatedRoute} from '@angular/router'
import {updateArticleAction} from './../../actions/update-article.action'
import {ArticleInputInterface} from './../../../shared/types/article-input.interface'
import {ErrorMessagesInterface} from './../../../shared/types/error-messages.interface'
import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {filter, map, Observable} from 'rxjs'
import {
  articleSelector,
  errorsSelector,
  isLoadingSelector,
  isSubmittingSelector,
} from '../../store/selectors'
import {getArticleAction} from '../../actions/get-article.action'

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent implements OnInit {
  slug: string
  isSubmitting$: Observable<boolean>
  errors$: Observable<ErrorMessagesInterface>
  initialValues$: Observable<ArticleInputInterface>
  isLoading$: Observable<boolean>

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map(({title, description, body, tagList}) => ({
        title,
        description,
        body,
        tagList,
      }))
    )
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  fetchData(): void {
    const {slug} = this
    this.store.dispatch(getArticleAction({slug}))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    const {slug} = this
    this.store.dispatch(updateArticleAction({slug, articleInput}))
  }
}
