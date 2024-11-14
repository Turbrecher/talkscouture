import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private URL: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) {

  }


  getAllArticles(): Observable<any> {
    return this.http.get<any>(this.URL + "articles")
  }

  getAllArticlesOnPage(page: number): Observable<any> {
    return this.http.get<any>(this.URL + "articles/?page=" + page)
  }


  getSectionArticles(section: string) {
    return this.http.get<any>(this.URL + "articles/?section=" + section)
  }

  getArticle(id: String) {
    return this.http.get<any>(this.URL + "articles/" + id)
  }

}
