import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { BySubregionComponent } from './pages/by-subregion/by-subregion.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ByCountryComponent,
    ByRegionComponent,
    BySubregionComponent,
    ByNameComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class CountriesModule {}
