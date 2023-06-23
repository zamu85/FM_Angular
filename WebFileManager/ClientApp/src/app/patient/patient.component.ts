import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Patient } from 'src/models/patient/patient.model';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit, OnChanges {
  @Input() paziente: Patient | undefined;
  patientForm: FormGroup;

  constructor() {
    this.patientForm = new FormGroup({
      firstName: new FormControl(this.paziente?.firstName),
      lastName: new FormControl(this.paziente?.lastName),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['paziente']) {
      this.patientForm.get('firstName')?.setValue(this.paziente?.firstName);
      this.patientForm.get('lastName')?.setValue(this.paziente?.lastName);
    }
  }

  ngOnInit(): void {
    // this.patientForm = this.fb.group({
    //   fistName: this.fb.control(this.paziente?.firstName),
    //   lastName: this.fb.control(this.paziente?.lastName),
    // });
  }
}
