import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  AddLocationComponent,
  TypeLocation,
} from '@shared/components/add-location/add-location.component';
import { LocationService } from '@shared/services/location.service';
import { AutocompleteComponent } from '@shared/components/autocomplete/autocomplete.component';
import { Country, State, Town } from '@shared/interfaces/location.interface';
import {
  confirmAlertLoading,
  successAlert,
} from '@shared/functions/confirm-alert.function';
import { errorFn } from '@shared/functions/errors.function';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [AutocompleteComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  countries: Country[] = [];

  countryNames: string[] = [];

  states: State[] = [];

  stateNames: string[] = [];

  towns: Town[] = [];

  townNames: string[] = [];

  currentFilter: { country: any; state: any; town: any } = {
    country: null,
    state: null,
    town: null,
  };

  constructor(
    private readonly modalService: NgbModal,
    private readonly locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.locationService.getCountries().subscribe({
      next: (res) => {
        this.countries = res;
        this.countryNames = res.map((country) => country.name_es);
      },
    });
  }

  getStateByCountry(country: string): void {
    this.currentFilter.country = this.countries.find(
      (c) => c.name_es === country
    );
    const countryId = this.currentFilter.country?.id;
    if (countryId) {
      this.locationService.getStates(countryId).subscribe({
        next: (res) => {
          this.states = res;
          this.stateNames = res.map((state) => state.name);
        },
      });
    }
  }

  getTownByState(state: string): void {
    this.currentFilter.state = this.states.find((s) => s.name === state);
    const stateId = this.currentFilter.state?.id;
    if (stateId) {
      this.locationService.getTowns(stateId).subscribe({
        next: (res) => {
          this.towns = res;
          this.townNames = res.map((town) => town.name);
        },
      });
    }
  }

  setTown(town: string): void {
    this.currentFilter.town = this.towns.find((t) => t.name === town);
  }

  deleteCountry(): void {
    const request = () =>
      this.locationService
        .deleteCountry(this.currentFilter.country.id)
        .subscribe({
          next: () => {
            this.getCountries();
            this.currentFilter.country = null;
            this.currentFilter.state = null;
            this.currentFilter.town = null;
            successAlert('País eliminado');
          },
          error: () => {
            errorFn('Error al eliminar el país');
          },
        });
    confirmAlertLoading(
      `El país ${this.currentFilter.country.name_es} será eliminado,  ¿deseas continuar?`,
      request
    );
  }

  deleteState(): void {
    const request = () =>
      this.locationService.deleteState(this.currentFilter.state.id).subscribe({
        next: () => {
          this.getStateByCountry(this.currentFilter.country.name_es);
          this.currentFilter.state = null;
          this.currentFilter.town = null;
          successAlert('Departamento eliminado');
        },
        error: () => {
          errorFn('Error al eliminar el departamento');
        },
      });
    confirmAlertLoading(
      `El departamento ${this.currentFilter.state.name} será eliminado,  ¿deseas continuar?`,
      request
    );
  }

  deleteTown(): void {
    const request = () =>
      this.locationService.deleteTown(this.currentFilter.town.id).subscribe({
        next: () => {
          this.getTownByState(this.currentFilter.state.name);
          this.currentFilter.town = null;
          successAlert('Municipio eliminado');
        },
        error: () => {
          errorFn('Error al eliminar el municipio');
        },
      });
    confirmAlertLoading(
      `El municipio ${this.currentFilter.town.name} será eliminado,  ¿deseas continuar?`,
      request
    );
  }

  openModal(name: TypeLocation, isEdit?: boolean): void {
    const modalRef = this.modalService.open(AddLocationComponent);
    modalRef.componentInstance.type = {
      name,
      isEdit,
    };
    modalRef.componentInstance.values = this.currentFilter;
    modalRef.dismissed.subscribe({
      next: (msg) => {
        if (msg === 'reloadCountry') this.getCountries();
        if (msg === 'reloadState')
          this.getStateByCountry(this.currentFilter.country.name_es);
        if (msg === 'reloadTown')
          this.getTownByState(this.currentFilter.state.name);
      },
    });
  }
}
