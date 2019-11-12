import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html'
})
export class PlaceComponent {
  title = 'PlatziSquare';
  places: any = [
    {id: 1, plan: 'Pagado', closeness: 1, distance: 1, name: 'Carros', active: true},
    {id: 2, plan: 'Free', closeness: 2, distance: 1.8, name: 'Motos', active: false},
    {id: 3, plan: 'Free', closeness: 3, distance: 110, name: 'Veterinaria', active: true}
  ];
  lat: number = 4.6852684;
  lng: number = -74.1605128;
  constructor() {

  }
}
