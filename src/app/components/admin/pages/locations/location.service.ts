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

  getStates(countryId: string) {
    return this.http.get<State[]>(`${this.API_URL}states`, {
      params: { countryId },
    });
  }

  getTowns(stateId: string) {
    return this.http.get<State[]>(`${this.API_URL}towns`, {
      params: { stateId },
    });
  }
}
