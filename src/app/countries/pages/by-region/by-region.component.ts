import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionSelected: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClassRegion(region: string): string {
    return region === this.regionSelected
      ? 'btn btn-primary m-1'
      : ' btn btn-outline-primary m-1';
  }

  searchByRegion(region: string): void {
    if (region === '') {
      this.regionSelected = '';
      this.countries = [];
      return;
    }

    this.regionSelected = region;
    this.countryService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
      console.log(countries);
    });
  }
}
