import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LugaresService {
  places: any = [
    {id: 1, plan: 'Pagado', closeness: 1, distance: 1, name: 'Carros', active: true, description: 'Description of place'},
    {id: 2, plan: 'Free', closeness: 2, distance: 1.8, name: 'Motos', active: false, description: 'Description of place'},
    {id: 3, plan: 'Free', closeness: 3, distance: 110, name: 'Veterinaria', active: true, description: 'Description of place'}
  ];
  constructor(private afDB: AngularFireDatabase) {}
  /**
   * getLugares
   */
  public getLugares() {
    return this.afDB.list('places/');
  }
  public searchPlace(id) {
    // tslint:disable-next-line: triple-equals
    return this.places.filter((place) => place.id == id)[0] || null;
  }
  /**
   * savePlace
   */
  public savePlace(place) {
    this.afDB.database.ref('places/' + place.id).set(place);
  }
}
