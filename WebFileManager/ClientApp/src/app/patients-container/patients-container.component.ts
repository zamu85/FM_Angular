import { Component, OnInit } from '@angular/core';
import { Paziente } from 'src/models/patient/patient.model';

@Component({
  selector: 'patients-container',
  templateUrl: './patients-container.component.html',
  styleUrls: ['./patients-container.component.css'],
})
export class PatientsContainerComponent implements OnInit {
  listaPazienti: Paziente[];

  constructor() {
    this.listaPazienti = [
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
    ];
  }

  ngOnInit(): void {}

  patientWasSelected(p: Paziente): void {
    console.log('Paziente selezionato: ', p);
  }
}
