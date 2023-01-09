import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SharedModule } from '../shared/shared.module';
import { ShopDetailsSectionComponent } from './shop-details-section/shop-details-section.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ShopDetailsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    BlogDetailsComponent,
    ShopDetailsSectionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class PagesModule { }
