import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/book.model';
import {select, Store} from '@ngrx/store';
import {selectFavourites} from '../../../store';

@Component({
  selector: 'book-favourite-widget',
  templateUrl: './favourite-widget.component.html',
  styleUrls: ['./favourite-widget.component.scss']
})
export class FavouriteWidgetComponent implements OnInit {
  @Input()
  recipeList: Recipe[];

  constructor(public readonly bookStore: Store) {
  }

  ngOnInit(): void {
    this.bookStore.pipe(select(selectFavourites)).subscribe((list) => {
      this.recipeList = list;
    });
  }

}
