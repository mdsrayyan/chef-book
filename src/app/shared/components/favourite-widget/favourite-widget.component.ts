import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/book.model';
import {select, Store} from '@ngrx/store';
import {selectFavourites} from '../../../store';
import {Router} from '@angular/router';

@Component({
  selector: 'book-favourite-widget',
  templateUrl: './favourite-widget.component.html',
  styleUrls: ['./favourite-widget.component.scss']
})
export class FavouriteWidgetComponent implements OnInit {
  @Input()
  recipeList!: Recipe[];
  maxFavItems = 4;

  constructor(public readonly bookStore: Store,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.bookStore.pipe(select(selectFavourites)).subscribe((list) => {
      this.recipeList = list;
    });
  }

  navigateCategory(path: string): void {
    this.router.navigate([`/category/${path}`]);
  }

  navigateToRecipe(recipe: Recipe): void {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }

}
