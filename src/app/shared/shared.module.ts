import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SearchCategoriesComponent } from './search-categories/search-categories.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';



@NgModule({
  declarations: [
    MainTitleComponent,
    SearchCategoriesComponent,
    SectionHeaderComponent,
    FeaturedCategoriesComponent,
    FeaturedContentComponent,
    PaginatorComponent,
    TodoListComponent,
    BlogSidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainTitleComponent,
    SearchCategoriesComponent,
    SectionHeaderComponent,
    FeaturedCategoriesComponent,
    FeaturedContentComponent,
    PaginatorComponent,
    TodoListComponent,
    BlogSidebarComponent
  ]
})
export class SharedModule { }
