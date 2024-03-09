import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css'],
})
export class ByNameComponent {
  term: string = '';
  countries: Country[] = [];
  suggestionsCountry: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.term = term;

    this.countryService.searchByName(this.term).subscribe(
      (countriesYes) => {
        this.countries = countriesYes;
      },
      (countriesNou) => {
        this.countries = [];
      }
    );
  }

  suggestions(term: string) {
    this.term = term;

    this.countryService.searchByName(this.term).subscribe(
      (countriesYes) => {
        this.countries = countriesYes;
      },
      (countriesNou) => {
        this.countries = [];
      }
    );
  }

  suggestionsSearch(term: string) {
    this.search(term);
  }
}
