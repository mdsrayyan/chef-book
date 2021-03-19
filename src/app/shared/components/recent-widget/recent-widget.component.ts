import {Component, Input, OnInit} from '@angular/core';
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
  @Input()
  recipeList: Recipe[];
  constructor(private readonly router: Router,
              public readonly bookStore: Store) { }

  ngOnInit(): void {
    this.bookStore.pipe(select(selectFavourites)).subscribe((caseObject) => {
    });
  }

  navigateToRecipe(recipe: Recipe) {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }

  editRecipe(recipe: Recipe) {
    this.router.navigate([`/edit-recipe/${recipe.id}`]);
  }

  toggleFavourites() {
    this.bookStore.dispatch(favouritesChange([{title: 'asdsa', caption: 'sadsad'}]));
  }


}
