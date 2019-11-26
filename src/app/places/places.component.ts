import { Component } from '@angular/core';
import { LugaresService } from 'src/Services/lugares.services';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  animations: [
    trigger('Container', [
      state('initial', style({
        opacity: 0
      })),
      state('finish', style({
        opacity: 1
      })),
      transition('initial => finish', animate(1000)),
      transition('finish => initial', animate(1000))
    ])
  ]
})
export class PlaceComponent {
  title = 'PlatziSquare';
  state = 'initial';
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
        this.state = 'finish';
      }, error => {
        console.log(error);
        alert('Hay un error intente mas tarde ' + error.statusText);
      });
  }

  animate() {
    this.state = (this.state === 'finish') ? 'initial' : 'finish' ;
  }
  animationInitialized(e: any) {
    console.log('Init');
    console.log(e);
  }
  animationFinished(e: any) {
    console.log('Finish');
    console.log(e);
  }
}
