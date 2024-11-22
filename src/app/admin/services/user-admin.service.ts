import { Injectable } from '@angular/core';
import { Urls } from '../../shared/urls/urls';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  URL: string = Urls.GLOBAL

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  //Function that list all users
  listUsers(page: string = "1") {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.get<any>(this.URL + "users", { headers })
  }


  //Function that creates an user.
  createUser(user: any) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"),
    }


    return this.http.post<any>(this.URL + "registeradmin/", user, { headers })
  }

  //Function that edits an user.
  editUser(user: any, id: string) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"),
    }


    return this.http.put<any>(this.URL + "users/" + id, user, { headers })
  }

  getUser(id: string) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"),
    }

    return this.http.get<any>(this.URL + "users/" + id, { headers })
  }


  //Function that deletes an user.
  deleteUser(id: string) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"),
    }


    return this.http.delete<any>(this.URL + "users/"+id, { headers })
  }
}
