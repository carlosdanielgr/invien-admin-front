import { Component, Input } from '@angular/core';
import { Project } from '@shared/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Partial<Project> = {};

  editProject() {}

  deleteProject() {}
}
