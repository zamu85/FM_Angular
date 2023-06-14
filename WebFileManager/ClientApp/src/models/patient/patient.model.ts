export class Paziente {
  cognome: string;
  nome: string;
  dataNascita: Date;
  id: number;

  constructor(id: number, cognome: string, nome: string, dataNascita: Date) {
    this.cognome = cognome;
    this.nome = nome;
    this.dataNascita = dataNascita;
    this.id = id;
  }
}
