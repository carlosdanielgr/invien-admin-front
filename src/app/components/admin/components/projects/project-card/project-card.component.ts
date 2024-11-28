import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@shared/project.interface';
import { ProjectService } from '@shared/services/project.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Partial<Project> = {};

  constructor(
    private readonly router: Router,
    private readonly projectService: ProjectService
  ) {}

  editProject() {
    this.router.navigate(['admin', 'project-edit'], {
      state: this.projectService.originalData.find(
        (p) => p.id === this.project.id
      ),
    });
  }

  deleteProject() {}
}
