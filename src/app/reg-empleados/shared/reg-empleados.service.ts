import { Injectable } from '@angular/core';
import { Empleados } from "app/reg-empleados/shared/empleados.model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegEmpleadosService {
lastId: number = 0;

  //List of empleados
  empleados: Empleados[] = [];

  constructor(private http: Http) { }

  //POST /empleados
  addEmpleados(empleado: Empleados): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.BACKEND_URL + 'users',empleado, options)
    .map(res => res.json());
  }

  // Simulate DELETE /empleados/:id
  deleteEmpleadosById(id: number):RegEmpleadosService {
    this.empleados = this.empleados
    .filter(empleado => empleado.id !== id);
    return this;
  }

  // Simulta PUT /empleados/:id
  updateEmpleadosById(id: number, values: Object = {}): Empleados {
    let empleado = this.getEmpleadosById(id);
    if(!empleado) {
      return null;
    }
    Object.assign(empleado, values);
    return empleado;
  }

  // Simulate GET /empleados
  getAllEmpleados(): Observable<Empleados[]> {
    return this.http.get(environment.BACKEND_URL+ 'users')
    .map(res => res.json() as Empleados[])
  }

  // Simulate GET /empleados/:id
  getEmpleadosById(id: number): Empleados {
    return this.empleados.
    filter(empleado => empleado.id === id).
    pop();
  }

}
