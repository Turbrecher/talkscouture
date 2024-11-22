import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriterHubComponent } from './pages/writer-hub/writer-hub.component';
import { ArticleCreateComponent } from './pages/article-create/article-create.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';

const routes: Routes = [
  {
    path: "writer",
    component: WriterHubComponent,
    children: [
      {
        //List articles
        path: "articles/list",
        component: ArticleListComponent
      },

      {
        //Create new article
        path: "articles/create",
        component: ArticleCreateComponent
      },

      {
        //Edit an existing article
        path: "articles/edit/:id",
        component: ArticleEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
