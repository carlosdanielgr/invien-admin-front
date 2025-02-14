import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Advisor } from '@shared/interfaces/project.interface';
import { ManageAdvisorComponent } from '../manage-advisor/manage-advisor.component';

@Component({
  selector: 'app-adviser',
  standalone: true,
  imports: [],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.scss',
})
export class AdviserComponent {
  @Input() adviser!: Advisor;

  constructor(private readonly modalService: NgbModal) {}

  onEdit() {
    const modalRef = this.modalService.open(ManageAdvisorComponent);
    modalRef.componentInstance.advisor = this.adviser;
  }
}
