import {ActivatedRoute} from '@angular/router'
import {getArticleAction} from './../store/actions/get-article.actions'
import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {combineLatest, map, Observable} from 'rxjs'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../store/selectors'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {deleteArticleAction} from '../store/actions/delete-article.actions'

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  private slug: string = ''

  article$: Observable<ArticleInterface>
  isLoading$: Observable<boolean>
  error$: Observable<string>
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues() {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    this.article$ = this.store.pipe(select(articleSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest([
      this.article$,
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(([article, currentUser]) => {
        if (!article || !currentUser) {
          return false
        }
        return article?.author?.username === currentUser?.username
      })
    )
  }

  fetchData() {
    const {slug} = this
    this.store.dispatch(getArticleAction({slug}))
  }

  deleteArticle() {
    const {slug} = this
    this.store.dispatch(deleteArticleAction({slug}))
  }
}
