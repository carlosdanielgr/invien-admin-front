import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddButtonComponent } from '@shared/components/add-button/add-button.component';
import { AdvisorService } from '@shared/services/advisor.service';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { AdviserComponent } from './components/adviser/adviser.component';
import { ManageAdvisorComponent } from './components/manage-advisor/manage-advisor.component';
import {
  confirmAlertLoading,
  successAlert,
} from '@shared/functions/confirm-alert.function';
import { Advisor } from '@shared/interfaces/property.interface';

@Component({
  selector: 'app-advisors',
  standalone: true,
  imports: [AddButtonComponent, AdviserComponent, LoadingComponent],
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.scss',
})
export class AdvisorsComponent implements OnInit {
  advisors: Advisor[] = [];

  loading = true;

  constructor(
    private readonly modalService: NgbModal,
    private readonly advisorService: AdvisorService
  ) {}

  ngOnInit(): void {
    this.getAdvisors();
  }

  private getAdvisors() {
    this.loading = true;
    this.advisorService.getAllAdvisors().subscribe({
      next: (advisors) => {
        this.advisors = advisors;
        this.loading = false;
      },
    });
  }

  openModal(advisor?: Advisor) {
    const modalRef = this.modalService.open(ManageAdvisorComponent);
    if (advisor) modalRef.componentInstance.advisor = advisor;
    modalRef.dismissed.subscribe({
      next: (text: string) => {
        if (text === 'reload') this.getAdvisors();
      },
    });
  }

  deleteAdvisor(id: string) {
    const request = () =>
      this.advisorService.deleteAdvisor(id).subscribe({
        next: () => {
          this.getAdvisors();
          successAlert('Asesor eliminado correctamente');
        },
      });
    confirmAlertLoading(
      `El asesor será eliminado,  ¿deseas continuar?`,
      request
    );
  }
}
