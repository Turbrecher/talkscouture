import { Component } from '@angular/core';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [],
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.sass'
})
export class ArticleViewComponent {
  ngOnInit(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }
}
