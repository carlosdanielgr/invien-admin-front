import { Component, OnInit } from '@angular/core';

import { ProjectService } from '@shared/services/project.service';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AddButtonComponent } from '@shared/components/add-button/add-button.component';
import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';
import { Project } from '@shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    NgTemplateOutlet,
    NgbNavModule,
    ProjectCardComponent,
    LoadingComponent,
    AddButtonComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  active = 1;

  projects: Project[] = [];

  constructor(readonly projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.initAllProjects();
    this.projects = this.projectsService.projects;
  }

  onFilterProject(event: NgbNavChangeEvent): void {
    this.projects = this.projectsService.projects.filter((project) =>
      event.nextId === 2 ? project.is_for === 'rent' : project.is_for === 'sale'
    );
  }
}
