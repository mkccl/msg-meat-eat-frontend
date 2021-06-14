import {Component, OnInit} from '@angular/core';

import { User } from '@app/auth/_models';
import { AccountService } from '@app/auth/_services';
import {WeatherService} from "@app/dashboard/service/weather.service";
import {finalize} from "rxjs/operators";
import {Weather} from "@app/dashboard/service/weather";

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
    user: User;
    weather: Weather;
    loaded: boolean = false;

    constructor(private accountService: AccountService, private weatherService: WeatherService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.loaded = true;
        this.getWeatherBasedOnName();
    }

    logout() {
        this.accountService.logout();
    }

    getWeatherBasedOnName() {
        this.weatherService.getWeatherBasedOnCity("Hannover")
            .pipe(finalize(() => this.loaded = false))
            .subscribe(data => {
                this.weather = data;
                console.log(this.weather);
            });
    }


}
