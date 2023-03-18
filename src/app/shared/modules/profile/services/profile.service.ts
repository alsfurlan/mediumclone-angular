import {environment} from './../../../../../environments/environment.prod'
import {ProfileResponseInterface} from '../types/profile-response.interface'
import {map, Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {ProfileInterface} from '../types/profile.interface'

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(slug: string): Observable<ProfileInterface> {
    return this.http
      .get<ProfileResponseInterface>(
        `${environment.apiUrl}/profiles/${slug}`
      )
      .pipe(map(({profile}) => profile))
  }
}
