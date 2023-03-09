import {GetArticleResponseInterface} from './../../../types/get-article-response.interface'
import {ArticleInterface} from './../../../types/article.interface'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment'
import {FavoriteResponseInterface} from '../types/favorite-response.interface'
import { map } from 'rxjs'

@Injectable()
export class FavoriteService {
  constructor(private httpClient: HttpClient) {}

  favorite({slug}: ArticleInterface) {
    return this.httpClient.post<FavoriteResponseInterface>(
      this.getUrl(slug),
      {}
    ).pipe(map(this.getArticle))
  }

  unfavorite({slug}: ArticleInterface) {
    return this.httpClient.delete<FavoriteResponseInterface>(
      this.getUrl(slug),
    ).pipe(map(this.getArticle))
  }

  private getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  private getArticle({article}: FavoriteResponseInterface) {
    return article
  }
}
