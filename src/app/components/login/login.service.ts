import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Login {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  postLogin(body: Login) {
    return this.http.post<{ token: string }>(
      'http://localhost:3000/auth/login',
      body
    );
  }
}
