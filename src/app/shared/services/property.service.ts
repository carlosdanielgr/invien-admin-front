import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

import { environment } from '@environment/environment';
import { Response } from '@shared/interfaces/response.interface';
import {
  OriginalData,
  Property,
  Type,
} from '@shared/interfaces/property.interface';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly API_URL = `${environment.apiUrl}property/`;

  properties: Property[] = [];

  originalData: OriginalData[] = [];

  loading = false;

  constructor(private readonly http: HttpClient) {}

  private getAllProperties() {
    return this.http.get<Response<Property[]>>(`${this.API_URL}all`);
  }

  getPropertyById(id: string) {
    return this.http.get<Property>(`${this.API_URL}${id}/es`);
  }

  postCreateProperty(property: FormData) {
    return this.http.post(`${this.API_URL}create`, property);
  }

  patchUpdateProperty(property: FormData, id: string) {
    return this.http.patch(`${this.API_URL}update/${id}`, property);
  }

  getTypes() {
    return this.http.get<Type[]>(`${this.API_URL}types`);
  }

  deleteProperty(id: string) {
    return this.http.delete(`${this.API_URL}delete/${id}`);
  }

  initAllProperties() {
    if (this.properties.length) return;
    this.newSubscribeToProperties();
  }

  newSubscribeToProperties() {
    this.loading = true;
    this.getAllProperties()
      .pipe(shareReplay())
      .subscribe({
        next: (res) => {
          this.properties = res.data;
          this.originalData = res.originalData;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
