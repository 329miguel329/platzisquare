import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LugaresService {
  places: any = [
    {id: 1, plan: 'Pagado', closeness: 1, distance: 1, name: 'Carros', active: true, description: 'Description of place'},
    {id: 2, plan: 'Free', closeness: 2, distance: 1.8, name: 'Motos', active: false, description: 'Description of place'},
    {id: 3, plan: 'Free', closeness: 3, distance: 110, name: 'Veterinaria', active: true, description: 'Description of place'}
  ];
  constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}
  /**
   * getLugares
   */
  public getLugares() {
    return this.afDB.list('places/');
  }
  public searchPlace(placeId: string) {
    // return this.places.filter((place) => place.id == id)[0] || null;
    return this.afDB.object('places/' + placeId);
  }
  /**
   * savePlace
   */
  public savePlace(place: { id: string; }) {
    this.afDB.database.ref('places/' + place.id).set(place);
  }

  public updatePlace(place: { id: string; }) {
    this.afDB.database.ref('places/' + place.id).set(place);
  }
  /**
   * getGeoData
   */
  public getGeoData(address: string) {
    // return this.http.get('http://maps.google.com/maps/api/geocode/xml?address=' + address);
    return this.http.get(
      // 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=&address' + address
      // 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=Bogota,Colombia'
      'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=' + address

    );
  }
}
