export class File
{
    id: number;
    fileType: number;
    recordingDate: Date;
    comment: string;
    location: string;

    constructor(id: number, fileType: number, recordingDate: Date, comment: string, location: string)
    {
        this.id = id;
        this.comment = comment;
        this.fileType = fileType;
        this.recordingDate = recordingDate;
        this.location = location;
    }
}