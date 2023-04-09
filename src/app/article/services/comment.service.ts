import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {CommentInterface} from '../types/comment.interface'
import {environment} from 'src/environments/environment'
import {CommentsResponseInterface} from '../types/comments-response.interface'

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(slug: string): Observable<CommentInterface[]> {
    return this.httpClient
      .get<CommentsResponseInterface>(
        `${environment.apiUrl}/articles/${slug}/comments`
      )
      .pipe(map(({comments}) => comments))
  }

  deleteComment(slug: string, id: number): Observable<{}> {
    return this.httpClient.delete<{}>(
      `${environment.apiUrl}/articles/${slug}/comments/${id}`
    )
  }
}
