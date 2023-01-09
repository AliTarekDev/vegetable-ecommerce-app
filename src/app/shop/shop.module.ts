import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './shop-main/shop-main.component';
import { LeftSliderComponent } from './left-slider/left-slider.component';
import { ShopCategoriesComponent } from './shop-categories/shop-categories.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DiscountSliderComponent } from './discount-slider/discount-slider.component';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PriceComponent } from './price/price.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { ColorsComponent } from './colors/colors.component';
import { PopularSizeComponent } from './popular-size/popular-size.component';
import { LatestProductsComponent } from './latest-products/latest-products.component';

@NgModule({
  declarations: [
    ShopMainComponent,
    LeftSliderComponent,
    ShopCategoriesComponent,
    DiscountSliderComponent,
    PriceComponent,
    FilterProductsComponent,
    ColorsComponent,
    PopularSizeComponent,
    LatestProductsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    CarouselModule,
    NgxSliderModule
  ]
})
export class ShopModule { }
