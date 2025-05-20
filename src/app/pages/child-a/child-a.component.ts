import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css',
})
export class ChildAComponent implements OnInit {
  constructor() {
    console.warn('constructor: Child A');
  }

  ngOnInit() {
    console.warn('ngOnInit: Child A');
  }
}
