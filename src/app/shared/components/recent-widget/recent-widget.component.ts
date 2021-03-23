import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {favouritesChange} from '../../../store/actions/case-object.actions';
import {Recipe} from '../../models/book.model';
import {RecipesService} from '../../../core/recipes.service';

@Component({
  selector: 'book-recent-widget',
  templateUrl: './recent-widget.component.html',
  styleUrls: ['./recent-widget.component.scss']
})
export class RecentWidgetComponent implements OnInit {
  @Input()
  recipeList: Recipe[];

  constructor(private readonly router: Router,
              public readonly bookStore: Store,
              public readonly recipesService: RecipesService) {
    this.recipeList = [];
  }

  ngOnInit(): void {
  }

  navigateToRecipe(recipe: Recipe): void {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }

  editRecipe(recipe: Recipe): void {
    this.router.navigate([`/edit-recipe/${recipe.id}`]);
  }

  toggleFavourites(recipe: Recipe): void {
    recipe.isFavourite = !recipe.isFavourite;
    this.recipesService.updateRecipe(recipe.id, recipe).then(() => {
      this.bookStore.dispatch(favouritesChange(this.recipeList.filter(recipeItem => recipeItem.isFavourite)));
    });
  }

  deleteRecipe(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe.id).then(() => {
      this.recipeList.splice(this.recipeList.findIndex(recipeItem => recipeItem.id === recipe.id), 1);
    });
  }


}
