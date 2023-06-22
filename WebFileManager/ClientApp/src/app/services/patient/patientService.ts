import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Paziente } from 'src/models/patient/patient.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PatientService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  getPatientList(): Observable<Paziente[]> {
    return this.http.get<Paziente[]>(this.baseUrl + 'pazienti/getpatients');
  }
}
