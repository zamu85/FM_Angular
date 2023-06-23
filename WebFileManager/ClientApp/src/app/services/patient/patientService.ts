import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Patient } from 'src/models/patient/patient.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PatientService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  getPatientList(): Observable<Patient[]> {
    return this.http
      .get<Array<Patient>>(this.baseUrl + 'pazienti/getpatients')
      .pipe(
        map((response: Patient[]) => {
          console.log(response);

          return response as Array<Patient>;
        })
      );
  }
}
