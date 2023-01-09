import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-details-section',
  templateUrl: './shop-details-section.component.html',
  styleUrls: ['./shop-details-section.component.scss']
})
export class ShopDetailsSectionComponent implements OnInit {

  productDetails= [
    {image: '../../assets/img/product/details/product-details-2.jpg', clsName: 'imgItem'},
    {image: '../../assets/img/product/details/product-details-3.jpg', clsName: 'imgItem'},
    {image: '../../assets/img/product/details/product-details-4.jpg', clsName: 'imgItem'},
    {image: '../../assets/img/product/details/product-details-5.jpg', clsName: 'imgItem'}
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
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  selectImage(item: string) {
    let imgSrc= item;
    let mainImg= document.querySelector('.product-details-pic-item img');
    mainImg?.setAttribute('src', imgSrc)
  }

}
