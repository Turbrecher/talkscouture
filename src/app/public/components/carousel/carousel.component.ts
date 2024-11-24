import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../services/article.service';
import { Urls } from '../../../shared/urls/urls';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.sass'
})
export class CarouselComponent {
  
  public carouselArticles !: Array<Article>
  public imgURL = Urls.ARTICLE_IMAGES

  ngOnInit() {
    this.articleService.getAllArticlesOnPage(1).subscribe((articles) => {
      this.carouselArticles = articles.data
    })
    
  }

  constructor(private articleService: ArticleService) {
  }


  slideRight() {
    document.getElementsByClassName("images")[0].scrollBy({
      top: 0,
      left: 515,
      behavior: "smooth"
    })
  }

  slideLeft() {
    document.getElementsByClassName("images")[0].scrollBy({
      top: 0,
      left: -515,
      behavior: "smooth"
    })
  }
}
