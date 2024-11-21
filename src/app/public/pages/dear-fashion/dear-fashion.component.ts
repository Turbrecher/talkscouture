import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";
import { ArticleService } from '../../services/article.service';
import { Article } from '../../../shared/models/article';
import { Urls } from '../../../shared/urls/urls';

@Component({
  selector: 'app-dear-fashion',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './dear-fashion.component.html',
  styleUrl: './dear-fashion.component.sass'
})
export class DearFashionComponent {
  articles !: Array<Article>
  public imgURL = Urls.IMAGES
  constructor(private articleService: ArticleService) {

  }


  ngOnInit() {


    this.articleService.getSectionArticles("Dear Fashion").subscribe((articles) => {
      this.articles = articles.data

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })



    


    
  }
}
