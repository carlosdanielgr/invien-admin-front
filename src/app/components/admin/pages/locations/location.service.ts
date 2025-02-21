import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Country, State } from '@shared/interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly API_URL = `${environment.apiUrl}location/`;

  constructor(private readonly http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>(`${this.API_URL}countries`);
  }

  postCountry(country: Country) {
    return this.http.post(`${this.API_URL}country`, country);
  }

  patchCountry(country: Country, countryId: string) {
    return this.http.patch(`${this.API_URL}country/${countryId}`, country);
  }

  deleteCountry(countryId: string) {
    return this.http.delete(`${this.API_URL}country/${countryId}`);
  }

  getStates(countryId: string) {
    return this.http.get<State[]>(`${this.API_URL}states`, {
      params: { countryId },
    });
  }

  postState(state: State) {
    return this.http.post(`${this.API_URL}state`, state);
  }

  patchState(state: State, stateId: string) {
    return this.http.patch(`${this.API_URL}state/${stateId}`, state);
  }

  deleteState(stateId: string) {
    return this.http.delete(`${this.API_URL}state/${stateId}`);
  }

  getTowns(stateId: string) {
    return this.http.get<State[]>(`${this.API_URL}towns`, {
      params: { stateId },
    });
  }
}
