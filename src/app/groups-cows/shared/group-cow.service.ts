import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { GroupCow } from "app/groups-cows/shared/group-cow.model";

@Injectable()
export class GroupCowService {

  constructor(private http:Http) { }

  // Simulate GET /cows
  getAllGroups(): Observable<GroupCow[]> {
    return this.http.get(environment.BACKEND_URL+'groups_cows')
    .map( res => res.json() as GroupCow[]);
  }

}
