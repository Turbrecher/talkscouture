import { Component, ViewEncapsulation } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/models/article';
import { Urls } from '../../../shared/urls/urls';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [],
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class ArticleViewComponent {

  public imgURL = Urls.ARTICLE_IMAGES
  public signatureURL = Urls.USER_SIGNATURES

  //Default article
  public article: Article = {
    id: "1",
    photo: "default",
    title: "default",
    subtitle: "default",
    description: "default",
    content: "default",
    date: "default",
    time: "default",
    section: "default",
    readTime: "default",
    writer_id: "default",
    writer: {
      id: "1",
      name: "default",
      surname: "default",
      username: "default",
      email: "default",
      photo: "default",
      signature: "default"
    }

  }


  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    //Loads the article's information
    this.articleService.getArticle(this.activatedRoute.snapshot.params['id']).subscribe((article) => {
      this.article = article
      console.log(article)
    })


    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }
}
