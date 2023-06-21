export class Esame {
  id: number;
  examType: number;
  studyType: number;
  recordingDate: Date;
  comment: string;
  marker: string;

  constructor(exam: any) {
    this.id = (exam && exam.id) || null;
    this.examType = (exam && exam.examType) || null;
    this.studyType = (exam && exam.studyType) || null;
    this.recordingDate = (exam && exam.recordingDate) || null;
    this.comment = (exam && exam.comment) || null;
    this.marker = (exam && exam.marker) || null;
  }
}
