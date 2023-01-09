import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { LandingSectionSliderComponent } from './components/landing-section-slider/landing-section-slider.component';

import { SliderModule } from './slider/slider.module';
import { HomeCategoriesComponent } from './components/home-categories/home-categories.component';
import { SharedModule } from './shared/shared.module';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    TopHeaderComponent,
    MainHeaderComponent,
    LeftSidebarComponent,
    LandingSectionComponent,
    LandingSectionSliderComponent,
    HomeCategoriesComponent,
    FeaturedProductsComponent,
    BannerComponent,
    BlogComponent,
    FooterComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
