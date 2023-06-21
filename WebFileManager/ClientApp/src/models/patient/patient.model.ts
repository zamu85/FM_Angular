export class Paziente {
  cognome: string;
  nome: string;
  dataNascita: Date;
  id: number;

  constructor(patient: any) {
    this.cognome = (patient && patient.cognome) || null;
    this.nome = (patient && patient.nome) || null;
    this.dataNascita = (patient && patient.dataNascita) || null;
    this.id = (patient && patient.id) || null;
  }
}
