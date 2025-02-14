import { Component } from '@angular/core';
import { Advisor } from '@shared/interfaces/project.interface';
import { AddButtonComponent } from '@shared/components/add-button/add-button.component';
import { AdviserComponent } from './components/adviser/adviser.component';
import { ManageAdvisorComponent } from './components/manage-advisor/manage-advisor.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advisors',
  standalone: true,
  imports: [AddButtonComponent, AdviserComponent],
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.scss',
})
export class AdvisorsComponent {
  advisors: Advisor[] = [];

  constructor(private readonly modalService: NgbModal) {}

  openModal() {
    this.modalService.open(ManageAdvisorComponent);
  }
}
