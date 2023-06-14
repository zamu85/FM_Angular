import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paziente } from 'src/models/patient/patient.model';

@Component({
  selector: 'patients-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @Input() listaPazienti: Paziente[] | undefined;
  @Output() onPatientSelected: EventEmitter<Paziente>;

  private pazienteSelezionato: Paziente | undefined;
  
  constructor() {
    this.onPatientSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(p: Paziente): void {
    this.pazienteSelezionato = p;
    this.onPatientSelected.emit(p);
  }

  isSelected(p: Paziente): boolean {
    if (!p || !this.pazienteSelezionato) {
      return false;
    }

    return p.id === this.pazienteSelezionato.id;
  }

}
