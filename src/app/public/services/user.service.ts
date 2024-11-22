import { Injectable } from '@angular/core';
import { Urls } from '../../shared/urls/urls';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = Urls.GLOBAL

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  //This service was made for a possible future implementation of user further actions.
  //As for now, public users can only change its profile data (on authentication service) and read articles.
  //If more public user actions were to be implemented in the API, this will be the correct location to code them.


}
