import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Advisor } from '@shared/interfaces/property.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvisorService {
  private readonly API_URL = `${environment.apiUrl}advisor/`;

  constructor(private readonly http: HttpClient) {}

  getAllAdvisors() {
    return this.http.get<Advisor[]>(this.API_URL);
  }

  postAdvisor(advisor: FormData) {
    return this.http.post<Advisor>(this.API_URL, advisor);
  }

  patchAdvisor(id: string, advisor: FormData) {
    return this.http.patch<Advisor>(`${this.API_URL}${id}`, advisor);
  }

  deleteAdvisor(id: string) {
    return this.http.delete(`${this.API_URL}${id}`);
  }
}
