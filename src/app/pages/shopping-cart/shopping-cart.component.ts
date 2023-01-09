import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  list= [
    {title: 'fresh meat'},
    {title: 'vegetables'},
    {title: 'fruit & nut gifts'},
    {title: 'fresh & berriers'},
    {title: 'ocean foods'},
    {title: 'butter & eggs'},
    {title: 'fast food'},
    {title: 'fresh onion'},
    {title: 'papayaya & crisps'},
    {title: 'oatmeal'},
    {title: 'fresh bananas'},
  ];

  quantity= 1;
  i=1;
  decrementVal() {
    if(this.i !=1) {
      this.i--;
      this.quantity=this.i;
    }
  }

  incrementVal() {
    if(this.i !=5) {
      this.i++;
      this.quantity=this.i;
     }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
