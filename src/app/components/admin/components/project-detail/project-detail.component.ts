import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '@environment/environment';
import { Project } from '@shared/interfaces/project.interface';
import { AdvisorService } from '@shared/services/advisor.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;

  apiUrl = `${environment.apiUrl}uploads/`;

  assetsUrl = environment.invienUrl;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly advisorService: AdvisorService,
  ) {}

  ngOnInit(): void {
    this.getAdvisor();
    this.project = history.state;
    if (this.project.url_video)
      this.project.url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.project.url_video,
      ) as string;
    this.project.url_map = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.project.url_map,
    ) as string;
  }

  private getAdvisor() {
    this.advisorService.getAllAdvisors().subscribe({
      next: (advisor) => {
        this.project.advisor = advisor.data.find(
          (a) => a.id === +this.project.advisorId,
        );
      },
    });
  }
}
