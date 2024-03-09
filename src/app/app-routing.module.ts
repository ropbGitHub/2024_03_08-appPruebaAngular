import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
