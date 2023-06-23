import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/models/patient/patient.model';
import { PatientComponent } from '../patient/patient.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'patients-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  @Input() listaPazienti: Patient[] | undefined;
  @Output() onPatientSelected: EventEmitter<Patient>;

  closeResult = '';

  public selectedPatient: Patient | undefined;

  constructor(private modalService: NgbModal) {
    this.onPatientSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  clicked(p: Patient): void {
    this.selectedPatient = p;
    this.onPatientSelected.emit(p);
  }

  isSelected(p: Patient): boolean {
    if (!p || !this.selectedPatient) {
      return false;
    }

    return p.patientId === this.selectedPatient.patientId;
  }

  open() {
    /*this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );*/
    const modalRef = this.modalService.open(PatientComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    modalRef.componentInstance.paziente = this.selectedPatient;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
