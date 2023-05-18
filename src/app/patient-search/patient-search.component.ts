import { HttpClient } from '@angular/common/http';
import { Patient } from './../models/Patient';
import { Component , inject } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  patients: Patient[] = [];
  searchValue: String = "";
  http = inject(HttpClient);
  onSearch(){
    console.log(this.searchValue);
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (json:any) => {
        this.patients = json;
      }
    )
  }
}
