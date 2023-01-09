import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
