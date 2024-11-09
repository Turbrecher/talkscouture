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
  public nArticlesUnordered = [1, 2, 3, 4, 5]
  

  ngOnInit(){

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })



  }
}
