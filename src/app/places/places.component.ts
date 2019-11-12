import { Component } from '@angular/core';
import { LugaresService } from 'src/Services/lugares.services';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html'
})
export class PlaceComponent {
  title = 'PlatziSquare';
  places = null;
  lat: number = 4.6852684;
  lng: number = -74.1605128;

  constructor(private placeService: LugaresService) {
    this.places = placeService.getLugares();
  }
}
