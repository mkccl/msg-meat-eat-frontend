import {Component, OnInit} from '@angular/core';

import { User } from '@app/auth/_models';
import { AccountService } from '@app/auth/_services';

import {Weather} from "@app/dashboard/service/weather";
import {Time} from "@app/dashboard/service/time";
import {ProjectService} from "@app/dashboard/service/project.service";
import { Modal } from "bootstrap";
import {AlertService} from "@app/dashboard/service/alert.service";

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    user: User;
    weather: Weather;
    time: Time;
    projectModal: Modal;

    loaded2: boolean = false;
    loaded: boolean = false;


    constructor(private accountService: AccountService,
                private projectService: ProjectService,
                private alertService: AlertService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.loaded = true;
    }

    openModal() {
        this.alertService.simpleAlert();
    }

    logout() {
        this.accountService.logout();
    }

    getBackgroundImage(userId: string) {
        console.log(userId);
        return "background-image: url(\"http://localhost:8080/api/v1/storage/"+ userId + "/dashboard/image\")"
    }

    getLogo() {
        return "http://localhost:8080/api/v1/storage/logo";
    }

    getProjectLogoSmall() {
        return "http://localhost:8080/api/v1/storage/project/logo";
    }

}
