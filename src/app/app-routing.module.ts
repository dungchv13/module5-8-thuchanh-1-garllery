import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import {ImgSlideComponent} from "./img-slide/img-slide.component";

const routes: Routes = [
  {
    path:'gallery',
    component: ImageGalleryComponent
  },
  {
    path:'slide',
    component: ImgSlideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
