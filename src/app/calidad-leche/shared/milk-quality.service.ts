import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { MilkQuality } from "app/calidad-leche/shared/milk-quality.model";

@Injectable()
export class MilkQualityService {

  constructor(private http:Http) { }

// Simulate GET /quality
  getAllQualities(): Observable<MilkQuality[]> {
    return this.http.get(environment.BACKEND_URL+'qualities')
    .map( res => res.json() as MilkQuality[]);
  }
}
