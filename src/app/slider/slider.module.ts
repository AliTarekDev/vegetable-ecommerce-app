import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlComponantComponent } from './owl-componant/owl-componant.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    OwlComponantComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [
    OwlComponantComponent
  ]
})
export class SliderModule { }
