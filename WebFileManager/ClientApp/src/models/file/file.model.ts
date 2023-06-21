export class File {
  id: number;
  fileType: number;
  recordingDate: Date;
  comment: string;
  location: string;

  constructor(file: any) {
    this.id = (file && file.id) || null;
    this.comment = (file && file.comment) || null;
    this.fileType = (file && file.fileType) || null;
    this.recordingDate = (file && file.recordingDate) || null;
    this.location = (file && file.location) || null;
  }
}
