import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

import { Response } from '@shared/interfaces/response.interface';
import { OriginalData, Project } from '@shared/project.interface';
import { shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly API_URL = `${environment.apiUrl}property/`;

  projects: Project[] = [];

  originalData: OriginalData[] = [];

  constructor(private readonly http: HttpClient) {}

  private getAllProjects() {
    return this.http.get<Response<Project[]>>(`${this.API_URL}all/es`);
  }

  getProjectById(id: string) {
    return this.http.get<Project>(`${this.API_URL}${id}/es`);
  }

  postCreateProject(project: FormData) {
    return this.http.post(`${this.API_URL}create`, project);
  }

  patchUpdateProject(project: FormData, id: string) {
    return this.http.patch(`${this.API_URL}update/${id}`, project);
  }

  initAllProjects() {
    if (this.projects.length) return;
    this.newSubscribeToProjects();
  }

  newSubscribeToProjects() {
    this.getAllProjects()
      .pipe(shareReplay())
      .subscribe({
        next: (res) => {
          this.projects = res.data;
          this.originalData = res.originalData;
        },
      });
  }
}
