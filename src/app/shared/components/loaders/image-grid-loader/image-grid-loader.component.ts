import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'book-image-grid-loader',
  templateUrl: './image-grid-loader.component.html',
  styleUrls: ['./image-grid-loader.component.scss']
})
export class ImageGridLoaderComponent implements OnInit {
  @Input()
  count: number;
  @Input()
  layout: string
  countArray: number[];

  constructor() {
    this.count = 0;
    this.layout = 'row';
    this.countArray = [];
  }

  ngOnInit(): void {
    this.countArray = Array(this.count);
  }

}
