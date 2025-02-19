import { LowerCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { LocationService } from 'src/app/components/admin/pages/locations/location.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { errorFn } from '@shared/functions/errors.function';

export type TypeLocation = 'country' | 'department' | 'municipality';

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [LowerCasePipe, ReactiveFormsModule, AutocompleteComponent],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.scss',
})
export class AddLocationComponent implements OnInit {
  @Input() type: TypeLocation = 'country';

  @Input() values: any = null;

  @Input() data = {
    countries: [],
    states: [],
  };

  form!: FormGroup;

  typeNames = {
    country: 'País',
    department: 'Departamento',
    municipality: 'Municipio',
  };

  constructor(
    private readonly locationService: LocationService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.formInit();
    this.handleValues();
  }

  private handleValues() {
    if (this.values)
      if (this.type === 'country') this.form.patchValue(this.values['country']);
  }

  private formInit() {
    if (this.type === 'country')
      this.form = new FormGroup({
        name_es: new FormControl('', [Validators.required]),
        name_en: new FormControl('', [Validators.required]),
      });
    else
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required]),
      });
  }

  onSubmit() {
    if (this.type === 'country') {
      if (!this.values) this.addCountry();
      else this.editCountry();
    }
  }

  private addCountry() {
    this.locationService.postCountry(this.form.value).subscribe({
      next: () => {
        this.modalService.dismissAll('reloadCountry');
      },
      error: () => {
        errorFn('Error al agregar el país');
      },
    });
  }

  private editCountry() {
    this.locationService
      .patchCountry(this.form.value, this.values['country']['id'])
      .subscribe({
        next: () => {
          this.modalService.dismissAll('reloadCountry');
        },
        error: () => {
          errorFn('Error al editar el país');
        },
      });
  }
}
