import { Component, OnInit, Input, Output } from '@angular/core';
import { Paziente } from 'src/models/patient/patient.model';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {
  @Input() paziente: Paziente | undefined;



  constructor() { 
  }

  ngOnInit(): void {
  }

}
