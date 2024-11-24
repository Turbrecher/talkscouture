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

  //Function that logs in an user.
  login(email: String, password: String) {
    let headers = {}
    let params = {
      "email": email,
      "password": password,
    }

    return this.http.post<any>(this.URL + "login", params, { headers })
  }

  //Function that retrieves profile data of the authenticated user.
  profile() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(this.URL + "profile", {}, { headers })
  }

  //Function that edits an user (if you're not admin, you can only edit yourself).
  editUser(user : FormData) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

  

    return this.http.post<any>(this.URL + "users/edit/" + user.get('id'), user, { headers })

  }

  //Function that registers a new user.
  register(user:any) {
    let headers = {}

    return this.http.post<any>(this.URL + "register", user, { headers })
  }


  //Function that gets the role of the authenticated user.
  getRole(token: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(this.URL + "role", {}, { headers })
  }

  //Function that logouts the user from the api DB (deletes token on db).
  logout() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(this.URL + "logout", {}, { headers })
  }

}
