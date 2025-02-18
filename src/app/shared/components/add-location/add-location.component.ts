import { LowerCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

export type TypeLocation = 'country' | 'department' | 'municipality';

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [LowerCasePipe, ReactiveFormsModule, AutocompleteComponent],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.scss',
})
export class AddLocationComponent {
  @Input() type: TypeLocation = 'country';

  @Input() data: any;

  form = new FormGroup<Record<TypeLocation | 'name', FormControl>>({
    country: new FormControl(''),
    department: new FormControl(''),
    municipality: new FormControl(''),
    name: new FormControl(''),
  });

  typeNames = {
    country: 'País',
    department: 'Departamento',
    municipality: 'Municipio',
  };
}
