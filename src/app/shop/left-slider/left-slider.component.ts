import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-slider',
  templateUrl: './left-slider.component.html',
  styleUrls: ['./left-slider.component.scss']
})
export class LeftSliderComponent implements OnInit {

  @Input() public mainList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
