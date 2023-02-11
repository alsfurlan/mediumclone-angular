import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment'

@Injectable()
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    return this.httpClient.delete<{}>(`${environment.apiUrl}/articles/${slug}`)
  }
}
