import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {environment} from 'src/environments/environment'
import {AuthResponse as AuthResponseInterface} from '../types/auth-response.interface'
import {LoginRequestInterface} from '../types/login-request.interface'
import {RegisterRequestInterface} from '../types/register-request.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser({user}: AuthResponseInterface): CurrentUserInterface {
    return user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.getUser))
  }
}
