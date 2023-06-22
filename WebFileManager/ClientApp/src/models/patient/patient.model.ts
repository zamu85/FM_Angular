export class Patient {
  lastName: string;
  firstName: string;
  birthDate: Date;
  patientId: number;

  constructor(patient: any) {
    this.lastName = (patient && patient.lastName) || null;
    this.firstName = (patient && patient.firstName) || null;
    this.birthDate = (patient && patient.birthDate) || null;
    this.patientId = (patient && patient.patientId) || null;
  }
}
