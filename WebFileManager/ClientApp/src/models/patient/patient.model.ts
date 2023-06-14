export class Paziente{
    cognome: string;
    nome: string;
    dataNascita: Date;

    constructor(cognome: string, nome:string, dataNascita: Date)
    {
        this.cognome = cognome;
        this.nome = nome;
        this.dataNascita = dataNascita;
    }
}