import { LowerCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocationService } from '@shared/services/location.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { errorFn } from '@shared/functions/errors.function';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

export type TypeLocation = 'country' | 'department' | 'municipality';

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [LowerCasePipe, ReactiveFormsModule, AutocompleteComponent],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.scss',
})
export class AddLocationComponent implements OnInit {
  @Input() type: { name: TypeLocation; isEdit: boolean } = {
    name: 'country',
    isEdit: false,
  };

  @Input() values: any = null;

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
    if (this.type.isEdit) {
      if (this.type.name === 'country')
        this.form.patchValue(this.values['country']);
      else if (this.type.name === 'department')
        this.form.patchValue(this.values['state']);
    }
  }

  private formInit() {
    if (this.type.name === 'country')
      this.form = new FormGroup({
        name_es: new FormControl('', [Validators.required]),
        name_en: new FormControl('', [Validators.required]),
      });
    else
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required]),
      });
    if (this.type.name === 'department') {
      this.form.addControl(
        'countryId',
        new FormControl(this.values.country.id, [Validators.required])
      );
    } else if (this.type.name === 'municipality') {
      this.form.addControl(
        'stateId',
        new FormControl(this.values.state.id, [Validators.required])
      );
    }
  }

  onSubmit() {
    if (this.type.name === 'country') {
      if (!this.type.isEdit) this.addCountry();
      else this.editCountry();
    } else if (this.type.name === 'department') {
      if (!this.type.isEdit) this.postState();
      else this.patchState();
    } else {
      if (!this.type.isEdit) this.addTown();
      else this.patchTown();
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

  private postState() {
    this.locationService.postState(this.form.value).subscribe({
      next: () => {
        this.modalService.dismissAll('reloadState');
      },
      error: () => {
        errorFn('Error al agregar el departamento');
      },
    });
  }

  private patchState() {
    this.locationService
      .patchState(this.form.value, this.values['state']['id'])
      .subscribe({
        next: () => {
          this.modalService.dismissAll('reloadState');
        },
        error: () => {
          errorFn('Error al editar el departamento');
        },
      });
  }

  private addTown() {
    this.locationService.postTown(this.form.value).subscribe({
      next: () => {
        this.modalService.dismissAll('reloadTown');
      },
      error: () => {
        errorFn('Error al agregar el municipio');
      },
    });
  }

  private patchTown() {
    this.locationService
      .patchTown(this.form.value, this.values['town']['id'])
      .subscribe({
        next: () => {
          this.modalService.dismissAll('reloadTown');
        },
        error: () => {
          errorFn('Error al editar el municipio');
        },
      });
  }
}
