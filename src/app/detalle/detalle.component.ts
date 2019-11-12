import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  title = 'PlatziSquare Detalle';
  places: any = [
    {id: 1, plan: 'Pagado', closeness: 1, distance: 1, name: 'Carros', active: true, description: 'Description of place'},
    {id: 2, plan: 'Free', closeness: 2, distance: 1.8, name: 'Motos', active: false, description: 'Description of place'},
    {id: 3, plan: 'Free', closeness: 3, distance: 110, name: 'Veterinaria', active: true, description: 'Description of place'}
  ];
  id = null;
  place: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
    console.log(this.route.snapshot.queryParams.action);
    this.id = this.route.snapshot.params.id;
    this.place = this.searchPlace();
  }

  searchPlace() {
    // tslint:disable-next-line: triple-equals
    return this.places.filter((place) => place.id == this.id)[0] || null;
  }
}
