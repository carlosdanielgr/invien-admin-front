import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Response } from '@shared/interfaces/response.interface';
import { Project } from '@shared/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly API_URL = 'http://localhost:3000/property/';

  projects: Project[] = [];

  constructor(private readonly http: HttpClient) {}

  private getAllProjects() {
    return this.http.get<Response<Project[]>>(`${this.API_URL}all/es`);
  }

  postCreateProject(project: FormData) {
    return this.http.post(`${this.API_URL}create`, project);
  }

  initAllProjects() {
    if (this.projects.length) return;
    this.newSubscribeToProjects();
  }

  newSubscribeToProjects() {
    this.getAllProjects().subscribe({
      next: (res) => {
        this.projects = res.data;
      },
    });
  }
}
