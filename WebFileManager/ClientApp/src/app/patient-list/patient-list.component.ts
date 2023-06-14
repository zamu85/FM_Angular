import { Component, OnInit, Input, Output } from '@angular/core';
import { Paziente } from 'src/models/patient/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @Input() patients: Paziente[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
