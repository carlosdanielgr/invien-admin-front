import { Component } from '@angular/core';
import { AutocompleteComponent } from '@shared/components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [AutocompleteComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {}
