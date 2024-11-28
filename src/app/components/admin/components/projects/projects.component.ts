import { Component, OnInit } from '@angular/core';
import { Project } from '@shared/project.interface';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectService } from '@shared/services/project.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(readonly projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.initAllProjects();
  }
}
