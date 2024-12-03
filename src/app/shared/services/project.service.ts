import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

import { environment } from '@environment/environment';
import { Response } from '@shared/interfaces/response.interface';
import {
  OriginalData,
  Project,
  Type,
} from '@shared/interfaces/project.interface';
import { Locations } from '@shared/interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly API_URL = `${environment.apiUrl}property/`;

  projects: Project[] = [];

  originalData: OriginalData[] = [];

  loading = false;

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

  getLocations() {
    return this.http.get<Locations>(`${environment.apiUrl}location`);
  }

  getTypes() {
    return this.http.get<Type[]>(`${this.API_URL}types`);
  }

  deleteProject(id: string) {
    return this.http.delete(`${this.API_URL}delete/${id}`);
  }

  initAllProjects() {
    if (this.projects.length) return;
    this.newSubscribeToProjects();
  }

  newSubscribeToProjects() {
    this.loading = true;
    this.getAllProjects()
      .pipe(shareReplay())
      .subscribe({
        next: (res) => {
          this.projects = res.data;
          this.originalData = res.originalData;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
