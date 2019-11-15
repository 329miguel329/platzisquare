import { Component } from '@angular/core';
import { LugaresService } from 'src/Services/lugares.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  place: any = {};
  constructor(private placeService: LugaresService) {}
  savePlace() {
    var address = this.place.address + ',' + this.place.city + ',' + this.place.country;
    this.placeService.getGeoData(address)
      ._subscribe((result) => {
        this.place.lat = 0;
        this.place.lng = 0;
        this.place.id = Date.now();
        this.placeService.savePlace(this.place);
        alert('Saved successfully');
        this.place = {};
      });
  }
}
