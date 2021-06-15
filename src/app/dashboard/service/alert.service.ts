import { Injectable } from '@angular/core';
import Swal from "sweetalert2"

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  simpleAlert() {
    Swal.fire("Hello Angular");
  }

}
