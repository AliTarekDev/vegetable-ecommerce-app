import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-discount-slider',
  templateUrl: './discount-slider.component.html',
  styleUrls: ['./discount-slider.component.scss']
})
export class DiscountSliderComponent implements OnInit {
  discount= [
    {image: 'assets/img/product/discount/pd-1.jpg'},
    {image: 'assets/img/product/discount/pd-2.jpg'},
    {image: 'assets/img/product/discount/pd-3.jpg'},
    {image: 'assets/img/product/discount/pd-4.jpg'},
    {image: 'assets/img/product/discount/pd-5.jpg'},
    {image: 'assets/img/product/discount/pd-6.jpg'},
  ]
  customOptions: OwlOptions = {
    margin: 30,
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    navText: [''],
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
