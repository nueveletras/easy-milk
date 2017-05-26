import { Injectable } from '@angular/core';
import { ProductionModel } from "app/production/shared/production-model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductionService {


  headers = new Headers({ 'Content-type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  addProduction(Production: ProductionModel): Observable<string> {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(environment.BACKEND_URL + 'productions', Production, options)
      .map(res => res.json());

  }

  getAllProductions(): Observable<ProductionModel[]> {
    return this.http.get(environment.BACKEND_URL + 'productions')
      .map(res => res.json() as ProductionModel[]);
  }

  getProductionById(id: number): Observable<ProductionModel> {
    return this.http.get(environment.BACKEND_URL + 'production/' + id)
      .map(res => res.json() as ProductionModel);
  }

  deleteProductionById(id: number): Observable<string> {
    return this.http.delete(environment.BACKEND_URL + 'production/' + id)
      .map(res => res.json());
  }

  updateProductionById(id: number, Production: ProductionModel): Observable<string> {
    return this.http.put(environment.BACKEND_URL + 'production/' + id, Production, this.options)
      .map(res => res.json());
  }
}


//agregar lo de cow.service.ts