import {favoriteAction, unfavoriteAction} from './../../store/actions'
import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {ArticleInterface} from '../../../../types/article.interface'

@Component({
  selector: 'mc-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent implements OnInit {
  @Input()
  article: ArticleInterface

  favoritesCount: number
  favorited: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    const {favorited, favoritesCount} = this.article
    this.favorited = favorited
    this.favoritesCount = favoritesCount
  }

  handleLike() {
    const {article} = this
    if (this.favorited) {
      this.store.dispatch(unfavoriteAction({article}))
      this.favoritesCount--;
    } else {
      this.store.dispatch(favoriteAction({article}))
      this.favoritesCount++;
    }
    this.favorited = !this.favorited
  }
}
