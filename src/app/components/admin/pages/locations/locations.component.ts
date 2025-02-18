import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  AddLocationComponent,
  TypeLocation,
} from '@shared/components/add-location/add-location.component';
import { AutocompleteComponent } from '@shared/components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [AutocompleteComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  constructor(private readonly modalService: NgbModal) {}

  openModal(type: TypeLocation, data?: any): void {
    const modalRef = this.modalService.open(AddLocationComponent);
    modalRef.componentInstance.type = type;
  }
}
