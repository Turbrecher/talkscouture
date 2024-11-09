import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-the-thought',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './the-thought.component.html',
  styleUrl: './the-thought.component.sass'
})
export class TheThoughtComponent {
  nArticles = [1,2,3,4,5]

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
