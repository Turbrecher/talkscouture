import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  URL: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  listMyArticles(page: string = "1") {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.get<any>(this.URL + "writerarticles", { headers })
  }
}
