import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  // API url
  baseApiUrl =
    'https://d13qur0ifyc4ho.cloudfront.net/IBIS001_Images/20240414/S0100160120299/image_18.jpeg';

  constructor(private http: HttpClient) {}

  // Returns an observable
  upload(file): Observable<any> {
    // Create form data
    //const formData = new FormData();

    // Store form name as "file" with file data
    //formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    const headersUpload = new HttpHeaders({
      'Content-Type': 'image/jpeg', // Ajusta el tipo de archivo según sea necesario
    });
    return this.http.put(this.baseApiUrl, file, { headers: headersUpload });
  }
}
