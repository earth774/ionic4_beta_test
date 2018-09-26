import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public userlogin: any;
  public api_token: any;
  constructor(private http: HttpClient,
    @Inject('API_URL') public api_url: string,
  ) {
    this.userlogin = JSON.parse(localStorage.getItem('userlogin'));
    this.api_token = localStorage.getItem('api_token');

  }

  // Login API
  login(authen) {
    console.log(authen);
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      let body = authen;

      this.http.post(this.api_url + 'user/login', body, httpOptions).subscribe(data => {
        resolve(data)
      }, error => {
      })
    })
  }

  // Register API
  register(authen) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      let body = authen;

      this.http.post(this.api_url + 'user/register', body, httpOptions).subscribe(data => {
        resolve(data)
      }, error => {
      })
    })
  }

  UploadProfileImage(image: File) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/form-data',
          'Authorization': this.api_token
        })
      };
      const frmData: FormData = new FormData();
      console.log(image, image.name, frmData);
      frmData.append("fileUpload", image, image.name)
      console.log(frmData);

      this.http.post(this.api_url + 'user/profile_image/' + this.userlogin.id, frmData, httpOptions).subscribe(data => {
        resolve(data)
      }, error => {
      })
    })
  }
}
