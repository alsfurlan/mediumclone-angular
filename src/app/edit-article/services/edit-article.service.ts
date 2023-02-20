import {ArticleInterface} from './../../shared/types/article.interface'
import {map, Observable} from 'rxjs'
import {SaveArticleResponseInterface} from 'src/app/shared/types/save-article-response.interface'
import {environment} from './../../../environments/environment.prod'
import {ArticleInputInterface} from './../../shared/types/article-input.interface'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
@Injectable()
export class EditArticleService {
  constructor(private httpClient: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    return this.httpClient
      .put<SaveArticleResponseInterface>(
        `${environment.apiUrl}/articles/${slug}`,
        {article: articleInput}
      )
      .pipe(map(({article}) => article))
  }
}
