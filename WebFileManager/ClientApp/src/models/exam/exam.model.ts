export class Esame {
    id: number;
    examType: number;
    studyType: number;
    recordingDate: Date;
    comment: string;
    marker: string;

    constructor(id: number, examType: number, studyType: number, recordingDate: Date, comment: string, marker: string)
    {
        this.id = id;
        this.examType = examType;
        this.studyType = studyType;
        this.recordingDate = recordingDate;
        this.comment = comment;
        this.marker = marker;
    }
}