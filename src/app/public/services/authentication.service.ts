import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Urls } from '../../shared/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL: string = Urls.GLOBAL

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

  profile() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(this.URL + "profile", {}, { headers })
  }

  editUser(name: String, surname: String, username: String, email: String, password: String, id: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    
    let params = {
      "email": email,
      "password": password,
      "name": name,
      "surname": surname,
      "username": username,
    }

    if(password == ""){
      params = {
        "email": email,
        "password": " ",
        "name": name,
        "surname": surname,
        "username": username,
      }
    }

    return this.http.put<any>(this.URL + "users/" + id, params, { headers })

  }

  register(user:any) {
    let headers = {}

    return this.http.post<any>(this.URL + "register", user, { headers })
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
