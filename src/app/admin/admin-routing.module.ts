import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHubComponent } from './pages/admin-hub/admin-hub.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleCreateComponent } from './pages/article-create/article-create.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminHubComponent,
    children: [
      {
        //list articles
        path: "articles/list",
        component: ArticleListComponent
      },

      {
        //create new article
        path: "articles/create",
        component: ArticleCreateComponent
      },

      {
        //edit existing article
        path: "articles/edit/:id",
        component: ArticleEditComponent
      },

      {
        //list users
        path: "users/list",
        component: UserListComponent
      },

      {
        //create new user
        path: "users/create",
        component: UserCreateComponent
      },

      {
        //edit an existing user
        path: "users/edit/:id",
        component: UserEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
