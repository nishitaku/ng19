import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css',
  imports: [MatSlideToggleModule],
})
export class ChildAComponent implements OnInit {
  constructor() {
    console.warn('constructor: Child A');
  }

  ngOnInit() {
    console.warn('ngOnInit: Child A');
  }
}
