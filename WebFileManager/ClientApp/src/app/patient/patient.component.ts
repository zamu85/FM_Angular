import { Component, OnInit, Input, Output } from '@angular/core';
import { Patient } from 'src/models/patient/patient.model';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  @Input() paziente: Patient | undefined;

  constructor() {}

  ngOnInit(): void {}
}
