import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.sass'
})
export class UploadImageComponent {

  file !: File

  constructor(private http: HttpClient) {

  }

  getFile(event: any) {
    this.file = event.target.files[0]

    console.log(event.target.files[0])
  }

  uploadImage(event: Event) {
    event.preventDefault()




    let formData: FormData = new FormData()
    formData.append('img', this.file, this.file.name)
    formData.append('title', "title")
    formData.append('aa', "aa")
    formData.append('bb', "bb")

    


    let data = {
      "img": this.file
    }

    this.http.post<any>('http://localhost:8000/api/uploadimage', formData).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }
}
