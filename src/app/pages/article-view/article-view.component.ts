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
    window.scroll(0,0)
  }
}
