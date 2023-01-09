import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vegetable-ecommerce';

  blog= [
    {
      image: '../../../assets/img/blog/blog-1.jpg',
      title: 'Cooking tips make cooking simple',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat'
    },
    {
      image: '../../../assets/img/blog/blog-2.jpg',
      title: '6 ways to prepare breakfast for 30',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat'
    },
    {
      image: '../../../assets/img/blog/blog-3.jpg',
      title: 'Visit the clean farm in the US',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat'
    }    
  ]

}



