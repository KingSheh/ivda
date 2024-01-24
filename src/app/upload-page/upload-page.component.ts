import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent {
  constructor(private authService: AuthService) { }
  selectedFiles: File[] = [];



  onFileSelected(event: any) {
    const files: FileList | null = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.selectedFiles.push(files[i]);
      }

    }

  }
  openFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }

  }

  signOut(): void {
    this.authService.signOut();
    console.log('User signed out.');
  }

}



