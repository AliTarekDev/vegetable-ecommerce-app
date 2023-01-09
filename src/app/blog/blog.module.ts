import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BlogMainComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
