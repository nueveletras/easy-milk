import { Injectable } from '@angular/core';
import { Potrero } from './potrero.model';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PotreroService {

  lastId: number = 0;

  //List of cows
  potreros: Potrero[] = [];

  constructor(private http: Http) { }

   addPotrero(potrero: Potrero): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.BACKEND_URL + 'pastures', potrero, options)
      .map(res => res.json());
  }

  deletePotreroById(id: number): PotreroService {
    this.potreros = this.potreros
      .filter(potrero => potrero.id !== id);
    return this;
  }

  updatePotreroById(id: number, values: Object = {}): Potrero {
    let potrero = this.getPotreroById(id);
    if (!potrero) {
      return null;
    }
    Object.assign(potrero, values);
    return potrero;
  }

  getAllPotreros(): Observable<Potrero[]> {
    return this.http.get(environment.BACKEND_URL + 'pastures')
      .map(res => res.json() as Potrero[]);
  }

  // Simulate GET /cows/:id
  getPotreroById(id: number): Potrero {
    return this.potreros.
      filter(potrero => potrero.id === id).
      pop();
  }

}
