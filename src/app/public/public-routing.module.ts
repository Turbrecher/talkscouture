import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TheThoughtComponent } from './pages/the-thought/the-thought.component';
import { DearFashionComponent } from './pages/dear-fashion/dear-fashion.component';
import { MuchoMasQueAnunciosComponent } from './pages/mucho-mas-que-anuncios/mucho-mas-que-anuncios.component';
import { ArticleViewComponent } from './pages/article-view/article-view.component';
import { ProfileComponent } from './pages/profile/profile.component';





export const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },

  {
    path: "thethought",
    component: TheThoughtComponent
  },

  {
    path: "dearfashion",
    component: DearFashionComponent
  },

  {
    path: "muchomasqueanuncios",
    component: MuchoMasQueAnunciosComponent
  },

  {
    path: "profile",
    component: ProfileComponent
  },

  {
    path: "articles/:id",
    component: ArticleViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})






export class PublicRoutingModule {


}
