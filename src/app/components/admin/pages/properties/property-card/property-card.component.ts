import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from '@environment/environment';

import {
  confirmAlertLoading,
  successAlert,
} from '@shared/functions/confirm-alert.function';
import { errorFn } from '@shared/functions/errors.function';
import { Property } from '@shared/interfaces/property.interface';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss',
})
export class PropertyCardComponent {
  @Input() property: Partial<Property> = {};

  rootImages = `${environment.apiUrl}uploads/images/`;

  constructor(
    private readonly router: Router,
    private readonly propertyService: PropertyService
  ) {}

  viewProperty() {
    this.router.navigate(['admin', 'property-detail'], {
      state: this.property,
    });
  }

  editProperty() {
    this.router.navigate(['admin', 'property-edit'], {
      state: this.propertyService.originalData.find(
        (p) => p.id === this.property.id
      ),
    });
  }

  deleteProperty() {
    const request = () => {
      this.propertyService
        .deleteProperty(this.property.id as string)
        .subscribe({
          next: () => {
            successAlert('Propiedad eliminado correctamente');
            this.propertyService.newSubscribeToProperties();
          },
          error: () => {
            errorFn('Error al eliminar la propiedad');
          },
        });
    };
    confirmAlertLoading(
      `Propiedad: ${this.property.name}, será eliminada`,
      request
    );
  }
}
