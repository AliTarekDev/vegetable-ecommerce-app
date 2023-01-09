import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  @Input() public mainList:any = [];
  constructor() {
   
   }

  ngOnInit(): void {
    const item= document.querySelector('.accordion-collapse');

    if(window.innerWidth <=991) {
      item?.classList.remove('show')
    }else {
      item?.classList.add('show')
    }

  }
}
