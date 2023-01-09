import { Component, OnInit } from '@angular/core';
declare var $: any;  
@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  slider= [
    {img: 'assets/img/categories/cat-1.jpg' , title: 'fresh fruit'},
    {img: 'assets/img/categories/cat-2.jpg', title: 'dried fruit'},
    {img: 'assets/img/categories/cat-3.jpg', title: 'vegetables'},
    {img: 'assets/img/categories/cat-4.jpg', title: 'drink fruits'},
    {img: 'assets/img/categories/cat-5.jpg', title: 'meat'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
