import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/models/patient/patient.model';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  @Input() patient: Patient | undefined;

  patientForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.patientForm = new FormGroup({
      firstName: new FormControl(this.patient?.firstName),
      lastName: new FormControl(this.patient?.lastName),
    });
  }

  getBackInfo() {
    if (this.patientForm.dirty) {
      console.log(this.patientForm);
      this.activeModal.close(this.patientForm.value);
    }
  }
  ngOnInit(): void {
    console.log('----------------', this.patient);
    this.patientForm.get('firstName')?.setValue(this.patient?.firstName);
    this.patientForm.get('lastName')?.setValue(this.patient?.lastName);
  }
}
