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
        path: "articles/list/:page",
        component: ArticleListComponent
      },

      {
        path: "articles/create",
        component: ArticleCreateComponent
      },

      {
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
