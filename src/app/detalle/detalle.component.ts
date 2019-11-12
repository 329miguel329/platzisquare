import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from 'src/Services/lugares.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  title = 'PlatziSquare Detalle';
  places = null;
  id = null;
  place: any = {};

  constructor(private route: ActivatedRoute, private placeService: LugaresService) {
    console.log(this.route.snapshot.params.id);
    console.log(this.route.snapshot.queryParams.action);
    this.id = this.route.snapshot.params.id;
    this.place = this.placeService.searchPlace(this.id);
  }
}
