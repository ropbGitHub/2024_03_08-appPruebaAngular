import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activeRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchByCca3(id)),
        tap(console.log)
      )
      .subscribe((countryYes) => (this.country = countryYes[0]));

    console.log('by country:', this.country);
  }
}
