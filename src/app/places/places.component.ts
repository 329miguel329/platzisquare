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
      .subscribe(places => {
        const that = this;
        console.log(places);
        that.places = places;
        that.places = Object.keys(that.places).map((key) => that.places[key]);
      }, error => {
        console.log(error);
        alert('Hay un error intente mas tarde ' + error.statusText);
      });
  }
}
