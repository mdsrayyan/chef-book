import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'book-short-description-loader',
  templateUrl: './short-description-loader.component.html',
  styleUrls: ['./short-description-loader.component.scss']
})
export class ShortDescriptionLoaderComponent implements OnInit {
  @Input()
  count: number;
  countArray: number[];

  constructor() {
    this.count = 0;
    this.countArray = [];
  }

  ngOnInit(): void {
    this.countArray = Array(this.count);
  }

}
