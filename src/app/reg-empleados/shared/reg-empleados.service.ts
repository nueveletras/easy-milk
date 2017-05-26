import { Injectable } from '@angular/core';
import { Empleados } from "app/reg-empleados/shared/empleados.model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegEmpleadosService {

  headers = new Headers({'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  //POST /empleados
  addEmpleados(empleado: Empleados): Observable<string> {
    
    return this.http.post(environment.BACKEND_URL + 'users',empleado, this.options)
    .map(res => res.json());
  }

  // DELETE /empleados/:id
  deleteEmpleadosById(id: number):Observable<string> {
    return this.http.delete(environment.BACKEND_URL + 'users/' + id)
    .map(res => res.json());
  }

  // Simulta PUT /empleados/:id
  updateEmpleadosById(id: number, empleado: Empleados): Observable<string> {
    return this.http.put(environment.BACKEND_URL + 'users/' + id, empleado, this.options)
    .map(res => res.json());
    
  }

  // Simulate GET /empleados
  getAllEmpleados(): Observable<Empleados[]> {
    return this.http.get(environment.BACKEND_URL+ 'users')
    .map(res => res.json() as Empleados[])
  }

  // Simulate GET /empleados/:id
  getEmpleadosById(id: number): Observable<Empleados> {
    return this.http.get(environment.BACKEND_URL+ 'users/' + id)
    .map(res => res.json() as Empleados);
    
  }

}
