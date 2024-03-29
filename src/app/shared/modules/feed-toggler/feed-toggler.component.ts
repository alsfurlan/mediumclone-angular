import {Observable} from 'rxjs'
import {Component, Input, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input()
  tagName: string

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
