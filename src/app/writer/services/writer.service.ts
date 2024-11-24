import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Article } from '../../shared/models/article';
import { Urls } from '../../shared/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  URL: string = Urls.GLOBAL

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  //Function that lists all the articles the writer owns.
  listMyArticles(page: string = "1") {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.get<any>(this.URL + "writerarticles", { headers })
  }



  //Function that creates an article.
  createArticle(article: any) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"), "Access-Control-Allow-Origin": "*"
    }


    return this.http.post<any>(this.URL + "articles", article, { headers })
  }


  //Function that edits an article.
  editArticle(article: any) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"), 
    }


    return this.http.post<any>(this.URL + "articles/edit", article, { headers })
  }

  //Function that deletes an existing article.
  deleteArticle(id: string) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"),
    }


    return this.http.delete<any>(this.URL + "articles/" + id, { headers })
  }
}
