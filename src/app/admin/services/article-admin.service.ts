import { Injectable } from '@angular/core';
import { Urls } from '../../shared/urls/urls';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ArticleAdminService {

  URL: string = Urls.GLOBAL

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  //Function that lists all articles.
  listAllArticles() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.get<any>(this.URL + "allarticles", { headers })
  }

  //Function that creates a new article.
  createArticle(article: any) {
    let headers = {
      "Authorization": "Bearer " + this.cookieService.get("token"),
    }


    return this.http.post<any>(this.URL + "articles/", article, { headers })
  }

  //Function that creates an existing article.
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
