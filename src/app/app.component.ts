import { Component, VERSION } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shortLink: string = ''; // Variable to store shortLink from api response
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file to Upload

  // Inject service
  constructor(private fileUploadService: FileUploadService) {}

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    if (this.file) {
      this.loading = !this.loading;
      console.log(this.file);
      this.fileUploadService.upload(this.file).subscribe((event: any) => {
        if (typeof event === 'object') {
          // Short link via api response
          this.shortLink = event.link;
          this.loading = false; // Flag variable
        }
      });
    }
  }
}
