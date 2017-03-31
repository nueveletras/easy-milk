import { Injectable } from '@angular/core';
import { Cow } from './cow.model';

@Injectable()
export class CowService {

  lastId: number = 0;

  //List of cows
  cows: Cow[] = [];

  constructor() { }

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
  getAllCows(): Cow[] {
    return this.cows;
  }

  // Simulate GET /cows/:id
  getCowById(id: number): Cow {
    return this.cows.
    filter(cow => cow.id === id).
    pop();
  }
}
