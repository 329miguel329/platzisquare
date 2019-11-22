import { Component } from '@angular/core';
import { LugaresService } from 'src/Services/lugares.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  place: any = {};
  id: any = null;
  constructor(private placeService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    if (this.id !== 'new') {
      this.placeService.searchPlace(this.id)
      .valueChanges()
      .subscribe((place) => {
        this.place = place;
      });
    }
  }
  savePlace() {
    const address = this.place.address + ',' + this.place.city + ',' + this.place.country;
    this.placeService.getGeoData(address)
      .subscribe((result: any) => {
        this.place.lat = result.results[0].geometry.location.lat;
        this.place.lng = result.results[0].geometry.location.lng;
        if (this.id !== 'new') {
          this.placeService.updatePlace(this.place);
          alert('Updated successfully');
        } else {
          this.place.id = Date.now();
          this.placeService.savePlace(this.place);
          alert('Saved successfully');
        }
        this.place = {};
      });
  }
}
