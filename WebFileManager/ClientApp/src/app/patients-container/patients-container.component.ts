import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient/patient.model';
import { PatientService } from '../services/patient/patientService';

@Component({
  selector: 'patients-container',
  templateUrl: './patients-container.component.html',
  styleUrls: ['./patients-container.component.css'],
})
export class PatientsContainerComponent implements OnInit {
  listaPazienti: Array<Patient> = [];

  constructor(private patientService: PatientService) {
    /*this.listaPazienti = [
      new Paziente({
        id: 1,
        cognome: 'Zamuner',
        nome: 'Riccardo',
        dataNascita: new Date('1985-08-25'),
      }),
      new Paziente({
        id: 2,
        cognome: 'Zamuner',
        nome: 'Lorenzo',
        dataNascita: new Date('2021-07-05'),
      }),
      new Paziente({
        id: 3,
        cognome: 'Zanchi',
        nome: 'Marta',
        dataNascita: new Date('1985-01-11'),
      }),
    ];*/
  }

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe({
      next: (v) => {
        console.log(v);
        v.map((p) => this.listaPazienti.push(p));
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  patientWasSelected(p: Patient): void {
    console.log('Paziente selezionato: ', p);
  }
}
