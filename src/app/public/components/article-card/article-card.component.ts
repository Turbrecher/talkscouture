import { NgOptimizedImage } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink,NgOptimizedImage],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.sass'
})
export class ArticleCardComponent {
  @Input() id: String = "1"
  @Input() photo: String = "images/defaultArticle.jpg"
  @Input() title: String = "My default title of article"
  @Input() description: String = "Default description of an article"
  @Input() date: String = "25.04.2002"
  @Input() readTime: String = "3 minutos de lectura"
  @Input() extra: boolean = false
  @Input() myClass: String = "article"
}
