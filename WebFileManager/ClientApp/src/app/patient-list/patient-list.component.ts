import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/models/patient/patient.model';

@Component({
  selector: 'patients-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  @Input() listaPazienti: Patient[] | undefined;
  @Output() onPatientSelected: EventEmitter<Patient>;

  public selectedPatient: Patient | undefined;

  constructor() {
    this.onPatientSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  clicked(p: Patient): void {
    this.selectedPatient = p;
    this.onPatientSelected.emit(p);
  }

  isSelected(p: Patient): boolean {
    if (!p || !this.selectedPatient) {
      return false;
    }

    return p.patientId === this.selectedPatient.patientId;
  }
}
