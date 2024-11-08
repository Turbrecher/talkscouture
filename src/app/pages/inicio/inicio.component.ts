import { Component, ViewChild } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticleCardComponent, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.sass'
})
export class InicioComponent {
  public nArticles = [1, 2, 3, 4, 5, 6]
  
}
