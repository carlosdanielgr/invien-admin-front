import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@shared/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly API_URL = 'http://localhost:3000/property/';

  constructor(private readonly http: HttpClient) {}

  getAllProjects() {
    return this.http.get<Project[]>(`${this.API_URL}all/es`);
  }

  postCreateProject(project: FormData) {
    return this.http.post(`${this.API_URL}create`, project);
  }
}
