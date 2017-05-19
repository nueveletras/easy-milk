import { Injectable } from '@angular/core';
import { Cow } from './cow.model';
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CowService {

  lastId: number = 0;

  //List of cows
  cows: Cow[] = [];

  constructor(private http: Http) { }

  // Simulate POST /cows
  addCow(cow: Cow): CowService {
    if (!cow.id) {
      cow.id = ++this.lastId;
    }
    this.cows.push(cow);
    return this;
  }

  // Simulate DELETE /cows/:id
  deleteCowById(id: number):CowService {
    this.cows = this.cows
    .filter(cow => cow.id !== id);
    return this;
  }

  // Simulta PUT /cows/:id
  updateCowById(id: number, values: Object = {}): Cow {
    let cow = this.getCowById(id);
    if(!cow) {
      return null;
    }
    Object.assign(cow, values);
    return cow;
  }

  // Simulate GET /cows
  getAllCows(): Observable<Cow[]> {
    return this.http.get(environment.BACKEND_URL + 'COWS')
    .map(res =>res.json() as Cow[]);
    
  }

  // Simulate GET /cows/:id
  getCowById(id: number): Cow {
    return this.cows.
    filter(cow => cow.id === id).
    pop();
  }
}
