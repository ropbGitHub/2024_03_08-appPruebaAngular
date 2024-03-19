import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-subregion',
  templateUrl: './by-subregion.component.html',
  styleUrls: ['./by-subregion.component.css'],
})
export class BySubregionComponent {
  regionsAndSubregions = {
    Africa: [
      'Eastern Africa',
      'Middle Africa',
      'Northern Africa',
      'Southern Africa',
      'Western Africa',
    ],
    Americas: [
      'Caribbean',
      'Central America',
      'North America',
      'South America',
    ],
    Asia: [
      'Central Asia',
      'Eastern Asia',
      'South-eastern Asia',
      'Southern Asia',
      'Western Asia',
    ],
    Europe: [
      'Eastern Europe',
      'Northern Europe',
      'Southern Europe',
      'Western Europe',
    ],
    Oceania: [
      'Australia and New Zealand',
      'Melanesia',
      'Micronesia',
      'Polynesia',
    ],
  };
  regionSelected: string = '';
  subregionSelected: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClassRegion(region: string): string {
    return region === this.regionSelected
      ? 'btn btn-primary m-1'
      : ' btn btn-outline-primary m-1';
  }

  getClassSubregion(subregion: string): string {
    return subregion === this.subregionSelected
      ? 'btn btn-primary m-1'
      : ' btn btn-outline-primary m-1';
  }

  showSubregions(region: string): void {
    this.regionSelected = region;

    if (region == '') {
      this.regionSelected = '';
      this.subregionSelected = '';
      this.countries = [];
    }
  }

  getSubregions(): string[] {
    return (this.regionsAndSubregions as any)[this.regionSelected];
  }

  searchBySubregions(subregion: string): void {
    this.subregionSelected = subregion;
    this.countryService
      .searchBySubregion(subregion)
      .subscribe((countries) => (this.countries = countries));
  }
}
