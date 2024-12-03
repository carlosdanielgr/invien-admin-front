import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Advisor } from '@shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvisorService {
  private readonly API_URL = `${environment.invienUrl}assets/advisors.json`;

  constructor(private readonly http: HttpClient) {}

  getAllAdvisors() {
    return this.http.get<{ data: Advisor[] }>(this.API_URL);
  }
}
