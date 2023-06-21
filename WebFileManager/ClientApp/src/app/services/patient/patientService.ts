import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Paziente } from 'src/models/patient/patient.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}
  /*getPatientList(): Observable<Paziente[]> {
    this.http
      .get<Paziente[]>(this.baseUrl + 'weatherforecast')
      .map((response: Response) => {
        return (<any>response.json()).items.map((item) => {
          return new Paziente({
            id: item.id,
            nome: item.nome,
            cognome: item.cognome,
            dataNascita: new Date(item.dataNascita),
          });
        });
      });
  }*/
}
