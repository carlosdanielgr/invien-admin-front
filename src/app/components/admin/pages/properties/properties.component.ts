import { Component, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { AddButtonComponent } from '@shared/components/add-button/add-button.component';
import { PropertyService } from '@shared/services/property.service';
import { Property } from '@shared/interfaces/property.interface';
import { PropertyCardComponent } from './property-card/property-card.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    RouterLink,
    NgTemplateOutlet,
    NgbNavModule,
    PropertyCardComponent,
    LoadingComponent,
    AddButtonComponent,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent implements OnInit {
  active = 1;

  properties: Property[] = [];

  constructor(readonly propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.initAllProperties();
    this.properties = this.propertyService.properties;
  }

  onFilterProject(event: NgbNavChangeEvent): void {
    this.properties = this.propertyService.properties.filter((property) =>
      event.nextId === 2
        ? property.is_for === 'rent'
        : property.is_for === 'sale'
    );
  }
}
