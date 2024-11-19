import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../../writer/components/article-card/article-card.component";
import { WriterService } from '../../services/writer.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Utilities } from '../../../shared/utilities';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink, RouterLinkActive],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.sass'
})
export class ArticleListComponent {
  articles: Array<any> = []

  constructor(private writerService: WriterService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    

    this.articles = []
    let page = this.activatedRoute.snapshot.params["page"]

    this.writerService.listMyArticles(page).subscribe({
      next: (response) => {

        console.log(response)

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


  changePage(){

  }
}
