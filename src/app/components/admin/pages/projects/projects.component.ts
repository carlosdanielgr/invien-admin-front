import { Component, OnInit } from '@angular/core';

import { ProjectService } from '@shared/services/project.service';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AddButtonComponent } from '@shared/components/add-button/add-button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    ProjectCardComponent,
    LoadingComponent,
    AddButtonComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(readonly projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.initAllProjects();
  }
}
