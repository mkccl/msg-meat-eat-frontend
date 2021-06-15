import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Time} from "@app/dashboard/service/time";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }


  getTime() {
    return this.http.get<Time>(`${environment.apiUrl}/utils/time/current`);
  }


}
