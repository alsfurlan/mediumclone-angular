import {environment} from './../../../environments/environment.prod'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {ArticleInputInterface} from './../../shared/types/article-input.interface'
import {Injectable} from '@angular/core'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {SaveArticleResponseInterface} from 'src/app/shared/types/save-article-response.interface'

@Injectable()
export class CreateArticleService {
  constructor(private httpClient: HttpClient) {}

  createArticle(article: ArticleInputInterface): Observable<ArticleInterface> {
    return this.httpClient
      .post<SaveArticleResponseInterface>(`${environment.apiUrl}/articles`, {
        article,
      })
      .pipe(map(({article}) => article))
  }
}
