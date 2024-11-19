import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  login(email: String, password: String) {
    let headers = {}
    let params = {
      "email": email,
      "password": password,
    }

    return this.http.post<any>(this.URL + "login", params, { headers })
  }


  register(name: String, surname: String, username: String, email: String, password: String) {
    let headers = {}
    let params = {
      "email": email,
      "password": password,
      "name": name,
      "surname": surname,
      "username": username,
    }

    return this.http.post<any>(this.URL + "register", params, { headers })
  }


  getRole(token: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(this.URL + "role", {}, { headers })
  }

  logout() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(this.URL + "logout", {}, { headers })
  }

}
