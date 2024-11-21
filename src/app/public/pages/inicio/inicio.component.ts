import { Component, ViewChild } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../services/article.service';
import { Urls } from '../../../shared/urls/urls';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticleCardComponent, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.sass'
})
export class InicioComponent {
  public nArticles = [1, 2, 3, 4, 5, 6]
  public nArticlesUnordered = [1, 2, 3, 4, 5]
  public topArticles!: Array<Article>
  public allArticles!: Array<Article>

  public imgURL = Urls.IMAGES



  constructor(private articleService: ArticleService) {

  }


  ngOnInit() {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    this.articleService.getAllArticlesOnPage(2).subscribe((articles) => {
      this.topArticles = articles.data
    })

    this.articleService.getAllArticlesOnPage(3).subscribe((articles) => {
      this.allArticles = articles.data
    })





  }
}
