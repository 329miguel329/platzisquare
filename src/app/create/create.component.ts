import { Component } from '@angular/core';
import { LugaresService } from 'src/Services/lugares.services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Rx } from 'rxjs/Rx';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  place: any = {};
  id: any = null;
  private searchField: FormControl;
  results$: Observable<any>;
  constructor(private placeService: LugaresService, private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.params.id;
    if (this.id !== 'new') {
      this.placeService.searchPlace(this.id)
        .valueChanges()
        .subscribe((place) => {
          this.place = place;
        });
    }
    const URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges.pipe(
      debounceTime(300),
      switchMap(q => this.http.get(`${URL}${q}`)),
      map((response: any) => {
        return response.results;
      })
    );
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
          result = this.placeService.savePlace(this.place);
          console.log(result);
          alert('Saved successfully');
        }
        this.place = {};
      });
  }
}
