import { MessageService } from 'primeng/components/common/messageservice';
import { FileUpload } from 'primeng/primeng';
import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {


  @Input() label: string;
  @Input() contentType: string = 'image/*';
  @Input() content: File;
  @Input() contentUrl: string;
  @Output() contentChange: EventEmitter<File>;

  constructor(private messageService: MessageService) {
    this.contentChange = new EventEmitter<File>();
  }

  upload(event, uploader: FileUpload) {
    for (const file of event.files) {
      this.content = file;
    }
    uploader.clear();
    this.setPreview();
    this.contentChange.emit(this.content);
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  private setPreview() {
    if (this.content && this.contentType && this.contentType.startsWith('image')) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.contentUrl = event.target.result;
      }
      reader.readAsDataURL(this.content);
    }
  }

  ngOnInit() {
  }

}
