import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Urls } from '../../../shared/urls/urls';
import { ArticleAdminService } from '../../services/article-admin.service';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.sass'
})
export class ArticleListComponent {

  articles: Array<any> = []
  public imgURL = Urls.IMAGES

  constructor(private articleAdminService: ArticleAdminService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    

    this.articles = []

    this.articleAdminService.listAllArticles().subscribe({
      next: (response) => {


        //LOADING ARTICLES
        response.forEach((article: any) => {
          this.articles.push(article)
        })


      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
