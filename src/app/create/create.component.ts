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
    this.place.id = Date.now();
    this.placeService.savePlace(this.place);
    alert('Saved successfully');
    this.place = {};
  }
}
