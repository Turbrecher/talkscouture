import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";

@Component({
  selector: 'app-mucho-mas-que-anuncios',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './mucho-mas-que-anuncios.component.html',
  styleUrl: './mucho-mas-que-anuncios.component.sass'
})
export class MuchoMasQueAnunciosComponent {
  nArticles = [1,2,3,4,5,6,7,8]
}
