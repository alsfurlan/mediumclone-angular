import {map, Observable} from 'rxjs'
import {ArticleInterface} from './../types/article.interface'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment'
import {GetArticleResponseInterface} from '../types/get-article-response.interface'

@Injectable()
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.httpClient
      .get<GetArticleResponseInterface>(
        `${environment.apiUrl}/articles/${slug}`
      )
      .pipe(map(({article}) => article))
  }
}
