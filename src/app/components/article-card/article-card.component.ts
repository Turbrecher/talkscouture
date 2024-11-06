import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.sass'
})
export class ArticleCardComponent {
  @Input() photo : String = "images/defaultArticle.jpg"
  @Input() description : String = "Default description of an article"
}
