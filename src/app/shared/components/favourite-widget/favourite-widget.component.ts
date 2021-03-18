import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/book.model';

@Component({
  selector: 'book-favourite-widget',
  templateUrl: './favourite-widget.component.html',
  styleUrls: ['./favourite-widget.component.scss']
})
export class FavouriteWidgetComponent implements OnInit {
  @Input()
  recipeList: Recipe[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
