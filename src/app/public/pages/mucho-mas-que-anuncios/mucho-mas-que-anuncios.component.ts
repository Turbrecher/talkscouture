import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../services/article.service';
import { Urls } from '../../../shared/urls/urls';

@Component({
  selector: 'app-mucho-mas-que-anuncios',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './mucho-mas-que-anuncios.component.html',
  styleUrl: './mucho-mas-que-anuncios.component.sass'
})
export class MuchoMasQueAnunciosComponent {
  constructor(private articleService: ArticleService) {

  }
  public imgURL = Urls.IMAGES
  articles !: Array<Article>



  ngOnInit() {
    this.articleService.getSectionArticles("Mucho más que anuncios").subscribe((articles) => {
      this.articles = articles.data

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })

  }
}
