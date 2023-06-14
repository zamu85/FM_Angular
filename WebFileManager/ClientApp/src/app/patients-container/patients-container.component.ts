import { Component, OnInit } from '@angular/core';
import { Paziente } from 'src/models/patient/patient.model';

@Component({
  selector: 'patients-container',
  templateUrl: './patients-container.component.html',
  styleUrls: ['./patients-container.component.css']
})

export class PatientsContainerComponent implements OnInit {
  pazienti: Paziente[];

  constructor() { 
    this.pazienti = [
      new Paziente('Zamuner', 'Riccardo', new Date("1985-08-25")),
      new Paziente('Zamuner', 'Lorenzo', new Date("2021-05-07")),
      new Paziente('Zanchi', 'Marta', new Date("1985-01-11")),
    ];
  }

  ngOnInit(): void {
  }

}
