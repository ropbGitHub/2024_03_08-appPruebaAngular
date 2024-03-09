import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { BySubregionComponent } from './pages/by-subregion/by-subregion.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'country/:id',
        component: ByCountryComponent,
      },
      {
        path: 'name',
        component: ByNameComponent,
        pathMatch: 'full',
      },
      {
        path: 'region',
        component: ByRegionComponent,
        pathMatch: 'full',
      },
      {
        path: 'subregion',
        component: BySubregionComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'name',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
