import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { ProfileResponseInterface } from '../../profile/types/profile-response.interface';

@Injectable()
export class FollowService {

  constructor(private httpClient: HttpClient) {}

  follow(username: string) {
    return this.httpClient.post<ProfileResponseInterface>(`${environment.apiUrl}/profiles/${username}/follow`, {})
  }

  unfollow(username: string) {
    return this.httpClient.delete<ProfileResponseInterface>(`${environment.apiUrl}/profiles/${username}/follow`)
  }
}
