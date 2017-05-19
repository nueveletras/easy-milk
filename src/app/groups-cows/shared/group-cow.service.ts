import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GroupCow } from "app/groups-cows/shared/group-cow.model";

@Injectable()
export class GroupCowService {

  constructor(private http: Http) { }

  // GET /groups-cows
  getAllGroupsCows(): Observable<GroupCow[]> {
    return this.http.get(environment.BACKEND_URL + 'groups-cows')
      .map(res => res.json() as GroupCow[]);
  }
}
