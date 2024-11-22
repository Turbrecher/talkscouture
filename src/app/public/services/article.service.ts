import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../shared/models/article';
import { Urls } from '../../shared/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private URL: string = Urls.GLOBAL

  constructor(private http: HttpClient) {

  }


  //Function that gets all articles.
  getAllArticles(): Observable<any> {
    return this.http.get<any>(this.URL + "articles")
  }

  //Function that gets all articles of a page (each one consisting on 6 articles)
  getAllArticlesOnPage(page: number): Observable<any> {
    return this.http.get<any>(this.URL + "articles/?page=" + page)
  }

  //Function that gets all articles of a certain section
  getSectionArticles(section: string) {
    return this.http.get<any>(this.URL + "articles/?section=" + section)
  }

  //Function that gets a specific article.
  getArticle(id: String) {
    return this.http.get<any>(this.URL + "articles/" + id)
  }

}
