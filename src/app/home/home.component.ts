import {Component, OnInit} from '@angular/core';

import { User } from '@app/auth/_models';
import {AccountService, AlertService} from '@app/auth/_services';

import {Weather} from "@app/dashboard/service/weather";
import {Time} from "@app/dashboard/service/time";
import {ProjectService} from "@app/dashboard/service/project.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Project} from "@app/dashboard/service/project";
import {first} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    form: FormGroup;
    user: User;
    weather: Weather;
    time: Time;

    loading: boolean = false;
    loaded2: boolean = false;
    loaded: boolean = false;
    submitted = false;


    constructor(private accountService  : AccountService,
                private projectService  : ProjectService,
                private alertService    : AlertService,
                private router          : Router,
                private formBuilder     : FormBuilder,
                private route           : ActivatedRoute,
    ) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.loaded = true;
        this.form = this.formBuilder.group({
            projectName: ['', Validators.required],
            projectDescription: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }


    onNewProject() {
        let project: Project = new Project();
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }


        this.loading = true;
        project.projectLeaderUserId = this.user.userId;
        project.projectName = this.f.projectName.value;
        project.projectDescription = this.f.projectDescription.value;
        this.projectService.createProject(project)
            .pipe(first())
            .subscribe({
                next: (data) => {
                    this.alertService.success("Projekt angelegt", {keepAfterRouteChange: true});
                    this.loading = false;


                    this.router.navigate(["../dashboard/task"], {queryParams: {} ,relativeTo: this.route});

                },
                error: (error) => {
                    this.alertService.error("Projekt konnte nicht angelegt werden");
                    this.loading = false;
                }
            });

    }

    onCancel() {
        this.submitted = false;
        this.loading = false;
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
