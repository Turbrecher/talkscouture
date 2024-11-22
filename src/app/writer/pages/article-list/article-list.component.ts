import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../../writer/components/article-card/article-card.component";
import { WriterService } from '../../services/writer.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Utilities } from '../../../shared/utilities';
import { Urls } from '../../../shared/urls/urls';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.sass'
})
export class ArticleListComponent {
  articles: Array<any> = []
  public imgURL = Urls.ARTICLE_IMAGES

  constructor(private writerService: WriterService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.articles = []
    let page = this.activatedRoute.snapshot.params["page"]

    //gets all writer articles
    this.writerService.listMyArticles(page).subscribe({
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
