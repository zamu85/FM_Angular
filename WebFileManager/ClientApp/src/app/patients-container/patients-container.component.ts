import { Component, OnInit } from '@angular/core';
import { Paziente } from 'src/models/patient/patient.model';

@Component({
  selector: 'patients-container',
  templateUrl: './patients-container.component.html',
  styleUrls: ['./patients-container.component.css']
})

export class PatientsContainerComponent implements OnInit {
  listaPazienti: Paziente[];

  constructor() { 
    this.listaPazienti = [
      new Paziente(1, 'Zamuner', 'Riccardo', new Date("1985-08-25")),
      new Paziente(2, 'Zamuner', 'Lorenzo', new Date("2021-05-07")),
      new Paziente(3, 'Zanchi', 'Marta', new Date("1985-01-11")),
    ];
  }

  ngOnInit(): void {
  }

  patientWasSelected(p: Paziente): void {
    console.log('Paziente selezionato: ', p);
  }
}
