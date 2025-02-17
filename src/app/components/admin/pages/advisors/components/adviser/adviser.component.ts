import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '@environment/environment';
import { Advisor } from '@shared/interfaces/project.interface';

@Component({
  selector: 'app-adviser',
  standalone: true,
  imports: [],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.scss',
})
export class AdviserComponent {
  @Input() adviser!: Advisor;

  @Output() editAdviser = new EventEmitter<Advisor>();

  @Output() deleteAdviser = new EventEmitter<string>();

  advisorImage = `${environment.apiUrl}uploads/advisors/`;

  constructor() {}

  onDelete() {
    this.deleteAdviser.emit(this.adviser.id);
  }

  onEdit() {
    this.editAdviser.emit(this.adviser);
  }
}
