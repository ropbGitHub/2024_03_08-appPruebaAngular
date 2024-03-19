import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiUrl: string = environment.apiUrl;

  // get params
  get httpParamsTable() {
    return new HttpParams().set(
      'fields',
      'cca3,flags,name,capital,region,subregion,'
    );
  }
  get httpParamsSuggestions() {
    return new HttpParams().set('fields', 'cca3,name,');
  }

  constructor(private httpClient: HttpClient) {}

  searchByCca3(cca3: string): Observable<Country[]> {
    const url = `${this._apiUrl}/alpha/${cca3}`;

    return this.httpClient.get<Country[]>(url);
  }

  searchByName(name: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${name}`;

    return this.httpClient.get<Country[]>(url, {
      params: this.httpParamsTable,
    });
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this.httpClient.get<Country[]>(url, {
      params: this.httpParamsTable,
    });
  }

  searchBySubregion(subregion: string): Observable<Country[]> {
    const url = `${this._apiUrl}/subregion/${subregion}`;

    return this.httpClient.get<Country[]>(url, {
      params: this.httpParamsTable,
    });
  }
}
