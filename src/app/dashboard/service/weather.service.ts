import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weather} from "./weather";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //weather?q={city name}&appid={API key}

  constructor(private http: HttpClient) { }

  getWeatherBasedOnCity(cityName: string) : Observable<Weather> {
    return this.http.get<Weather>(`${environment.weatherUrl}weather?q=${cityName}&units=metric&appid=${environment.weatherKey}`);
  }


}
