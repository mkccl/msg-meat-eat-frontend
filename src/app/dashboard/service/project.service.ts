import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Project} from "@app/dashboard/service/project";
import {User} from "@app/auth/_models";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }


  getProjectLogoSmall() {
    return this.http.get(`${environment.apiUrl}/storage/project/small`)
  }

  createProject(project: Project) {
    console.log(project);
    return this.http.post<Project>(`${environment.apiUrl}/project/post`, project);
  }

  getProject() {

  }

}
