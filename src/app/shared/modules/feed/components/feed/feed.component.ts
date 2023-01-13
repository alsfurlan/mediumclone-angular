import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors'
import {GetFeedResponseInterface} from './../../types/get-feed-response.interface'
import {getFeedAction} from './../../store/actions/get-feed.action'
import {Component, Input, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }
  
  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
