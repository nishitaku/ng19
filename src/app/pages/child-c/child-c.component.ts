import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrl: './child-c.component.css',
})
export class ChildCComponent implements OnInit {
  constructor() {
    console.warn('constructor: Child C');
  }

  ngOnInit() {
    console.warn('ngOnInit: Child C');
  }
}
