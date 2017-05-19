import { Injectable } from '@angular/core';
import { Cow } from './cow.model';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CowService {

  lastId: number = 0;

  //List of cows
  cows: Cow[] = [];

  constructor(private http: Http) { }



  // POST /cows
  addCow(cow: Cow): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.BACKEND_URL + 'cows', cow, options)
      .map(res => res.json());
  }

  // Simulate DELETE /cows/:id
  deleteCowById(id: number): CowService {
    this.cows = this.cows
      .filter(cow => cow.id !== id);
    return this;
  }

  // Simulta PUT /cows/:id
  updateCowById(id: number, values: Object = {}): Cow {
    let cow = this.getCowById(id);
    if (!cow) {
      return null;
    }
    Object.assign(cow, values);
    return cow;
  }

  // Simulate GET /cows
  getAllCows(): Observable<Cow[]> {

    return this.http.get(environment.BACKEND_URL + 'cows')
      .map(res => res.json() as Cow[]);
  }

  // Simulate GET /cows/:id
  getCowById(id: number): Cow {
    return this.cows.
      filter(cow => cow.id === id).
      pop();
  }
}
