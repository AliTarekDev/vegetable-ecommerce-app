import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './blog/blog.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'shop', loadChildren: ()=> import('./shop/shop.module').then(m=> m.ShopModule)},
  {path: 'pages', loadChildren: ()=> import('./pages/pages.module').then(m=> m.PagesModule)},
  {path: 'blog', loadChildren: ()=> import('./blog/blog.module').then(m => m.BlogModule)},
  {path: 'contact', loadChildren: ()=> import('./contact/contact.module').then(m => m.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
