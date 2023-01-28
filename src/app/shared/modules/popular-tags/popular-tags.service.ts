import {GetPopularTagsResponseInterface} from './types/get-popular-tags-response.interface'
import {map, Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {TagType} from '../../types/tag.interface'
import {Injectable} from '@angular/core'

@Injectable()
export class PopularTagsService {
  constructor(private httpClient: HttpClient) {}

  getPopularTags(): Observable<TagType[]> {
    return this.httpClient
      .get<GetPopularTagsResponseInterface>(`${environment.apiUrl}/tags`)
      .pipe(map(({tags}) => tags))
  }
}
