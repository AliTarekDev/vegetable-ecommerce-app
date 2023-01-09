import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {

  products= [
    {image: '../../../assets/img/latest-product/lp-1.jpg'},
    {image: '../../../assets/img/latest-product/lp-2.jpg'},
    {image: '../../../assets/img/latest-product/lp-3.jpg'},
  ]

  customOptions: OwlOptions = {
    margin: 30,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
