import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideComponent } from './img-slide.component';



@NgModule({
  declarations: [ImgSlideComponent],
  imports: [
    CommonModule
  ],
  exports: [ImgSlideComponent]
})
export class ImgSlideModule { }
