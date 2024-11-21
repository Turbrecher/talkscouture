import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';

const routes: Routes = [
  {
    path: "upload",
    component: UploadImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
