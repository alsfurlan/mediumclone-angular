import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {CommentInterface} from '../types/comment.interface'
import {environment} from 'src/environments/environment'
import {CommentsResponseInterface} from '../types/comments-response.interface'
import {CommentResponseInterface} from '../types/comment-response.interface'
import {PostComment} from '../types/post-comment.interface'

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(slug: string): Observable<CommentInterface[]> {
    return this.httpClient
      .get<CommentsResponseInterface>(this.getUrl(slug))
      .pipe(map(({comments}) => comments))
  }

  postComment(
    slug: string,
    comment: PostComment
  ): Observable<CommentInterface> {
    return this.httpClient
      .post<CommentResponseInterface>(this.getUrl(slug), {comment})
      .pipe(map(({comment}) => comment))
  }

  deleteComment(slug: string, id: number): Observable<{}> {
    return this.httpClient.delete<{}>(this.getUrl(slug, id))
  }

  getUrl = (slug, id: number | string = '') =>
    `${environment.apiUrl}/articles/${slug}/comments/${id}`
}
