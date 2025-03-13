import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from '@environment/environment';

import {
  confirmAlertLoading,
  successAlert,
} from '@shared/functions/confirm-alert.function';
import { errorFn } from '@shared/functions/errors.function';
import { Project } from '@shared/interfaces/project.interface';
import { ProjectService } from '@shared/services/project.service';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss',
})
export class PropertyCardComponent {
  @Input() project: Partial<Project> = {};

  rootImages = `${environment.apiUrl}uploads/images/`;

  constructor(
    private readonly router: Router,
    private readonly projectService: ProjectService
  ) {}

  viewProject() {
    this.router.navigate(['admin', 'property-detail'], {
      state: this.project,
    });
  }

  editProject() {
    this.router.navigate(['admin', 'property-edit'], {
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
    confirmAlertLoading(
      `Propiedad: ${this.project.name}, será eliminada`,
      request
    );
  }
}
