import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../../shared/models/article';
import { Urls } from '../../../shared/urls/urls';

@Component({
  selector: 'app-the-thought',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './the-thought.component.html',
  styleUrl: './the-thought.component.sass'
})
export class TheThoughtComponent {

  articles !: Array<Article>
  public imgURL = Urls.ARTICLE_IMAGES

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {

    //gets all articles of the thought' section
    this.articleService.getSectionArticles("The Thought").subscribe((articles) => {
      this.articles = articles.data

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })

  }
}
