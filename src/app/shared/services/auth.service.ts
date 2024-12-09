import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

export interface Login {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = `${environment.apiUrl}auth/`;

  constructor(private readonly http: HttpClient) {}

  postLogin(body: Login) {
    return this.http.post<{ token: string }>(`${this.API_URL}login`, body);
  }

  postLogout() {
    return this.http.post<void>(`${this.API_URL}logout`, {});
  }
}
