import { Component } from '@angular/core';
import { LugaresService } from 'src/Services/lugares.services';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html'
})
export class PlaceComponent {
  title = 'PlatziSquare';
  places = null;
  lat = 4.6852684;
  lng = -74.1605128;

  constructor(private placeService: LugaresService) {
    placeService.getLugares()
      .valueChanges()
      .subscribe(places => {
        console.log(places);
        this.places = places;
      });
  }
}
