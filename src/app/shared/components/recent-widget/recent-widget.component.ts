import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {favouritesChange} from '../../../store/actions/case-object.actions';
import {Recipe} from '../../models/book.model';
import {selectFavourites} from '../../../store';

@Component({
  selector: 'book-recent-widget',
  templateUrl: './recent-widget.component.html',
  styleUrls: ['./recent-widget.component.scss']
})
export class RecentWidgetComponent implements OnInit {

  constructor(private readonly router: Router,
              public readonly bookStore: Store) { }

  ngOnInit(): void {
    this.bookStore.pipe(select(selectFavourites)).subscribe((caseObject) => {
      alert('Favourite selected');
    });
  }

  navigateToRecipe() {
    this.router.navigate([`/recipe/1`]);
  }

  addToFavourites() {
    this.bookStore.dispatch(favouritesChange([{title: 'asdsa', caption: 'sadsad'}]));
  }


}
