import {errorSelector, isLoadingSelector, tagsSelector} from './store/selectors'
import {TagType} from './../../types/tag.interface'
import {Observable} from 'rxjs'
import {getPopularTagsAction} from './store/actions'
import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  tags$: Observable<TagType[] | null>
  error$: Observable<string>
  isLoading$: Observable<boolean | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues() {
    this.tags$ = this.store.pipe(select(tagsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  fetchData() {
    this.store.dispatch(getPopularTagsAction())
  }
}
