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


}
