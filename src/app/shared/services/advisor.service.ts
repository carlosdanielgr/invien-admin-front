import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advisor } from '@shared/project.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvisorService {
  private readonly API_URL = 'http://localhost:3000/advisor/';

  constructor(private readonly http: HttpClient) {}

  getAllAdvisors() {
    return this.http.get<Advisor[]>(`${this.API_URL}`);
  }
}
