import { environment } from './../../../../../environments/environment';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { GetFeedResponseInterface } from '../types/get-feed-response.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    return this.http.get<GetFeedResponseInterface>(`${environment.apiUrl}${url}`);
  }
}
