import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";

@Component({
  selector: 'app-dear-fashion',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './dear-fashion.component.html',
  styleUrl: './dear-fashion.component.sass'
})
export class DearFashionComponent {
  nArticles = [1,2,3,4,5,6,7,8]
}
