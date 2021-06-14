import {Component, OnInit} from '@angular/core';

import { User } from '@app/auth/_models';
import { AccountService } from '@app/auth/_services';
import {WeatherService} from "@app/dashboard/service/weather.service";
import {finalize} from "rxjs/operators";
import {Weather} from "@app/dashboard/service/weather";
import {TimeService} from "@app/dashboard/service/time.service";
import {Time} from "@app/dashboard/service/time";

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    user: User;
    weather: Weather;
    time: Time;

    loaded2: boolean = false;
    loaded: boolean = false;


    constructor(private accountService: AccountService,
                private weatherService: WeatherService,
                private timeService: TimeService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.loaded = true;
        this.loaded2 = true;
        this.getWeatherBasedOnName();
        this.getTime();
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

    getWeatherRounded(value: number) {
        return Math.round(value);
    }

    getTime() {
        this.timeService.getTime()
            .pipe(finalize(() => this.loaded2 = false))
            .subscribe(time => {
                this.time = time;
                console.log(time);
        });
    }



}
