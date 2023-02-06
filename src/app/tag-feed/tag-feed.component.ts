import {ActivatedRoute} from '@angular/router'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subscription, tap} from 'rxjs'

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl = '/articles'
  tagName: string
  subscription: Subscription = new Subscription()

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.paramMap
        .pipe(
          tap((params) => {
            this.tagName = params.get('slug')
            this.apiUrl = `/articles?tag=${this.tagName}`
          })
        )
        .subscribe()
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
