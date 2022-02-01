import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { IRegisterRequest } from '../types/register-request.interface';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../types/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users`;

    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user))
  }
}
