import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Article } from '../../shared/models/article';

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


  createArticle(article: any) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"), 
    }


    return this.http.post<any>(this.URL + "articles/", article, { headers })
  }

  editArticle(article: any) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"), 
    }


    return this.http.post<any>(this.URL + "articles/edit", article, { headers })
  }
}
