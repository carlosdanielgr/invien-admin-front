import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import {
  confirmAlertLoading,
  successAlert,
} from '@shared/functions/confirm-alert.function';
import { errorFn } from '@shared/functions/errors.function';
import { Project } from '@shared/interfaces/project.interface';
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

  deleteProject() {
    const request = () => {
      this.projectService.deleteProject(this.project.id as string).subscribe({
        next: () => {
          successAlert('Proyecto eliminado correctamente');
          this.projectService.newSubscribeToProjects();
        },
        error: () => {
          errorFn('Error al eliminar el proyecto');
        },
      });
    };
    confirmAlertLoading('Este proyecto será eliminado', request);
  }
}
