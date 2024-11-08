import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.sass'
})
export class ArticleCardComponent {
  @Input() photo: String = "images/defaultArticle.jpg"
  @Input() title: String = "My default title of article"
  @Input() description: String = "Default description of an article"
  @Input() extra: boolean = false
  @Input() myClass: String = "article"
}
