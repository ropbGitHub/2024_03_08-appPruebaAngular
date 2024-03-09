import { Component } from '@angular/core';

interface MenuItem {
  section: string;
  route: string;
}

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  searchMenu: MenuItem[] = [
    {
      section: 'Nombre',
      route: './search/name',
    },
    {
      section: 'Región',
      route: './search/region',
    },
    {
      section: 'SubRegión',
      route: './search/subregion',
    },
  ];
}
