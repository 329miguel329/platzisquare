import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places: any = [
    {plan: 'Pagado', closeness: 1, distance: 1, name: 'Carros', active: true},
    {plan: 'Free', closeness: 2, distance: 1.8, name: 'Motos', active: false},
    {plan: 'Free', closeness: 3, distance: 110, name: 'Veterinaria', active: true}
  ];
  lat: number = 4.6852684;
  lng: number = -74.1605128;
  constructor() {

  }
}
