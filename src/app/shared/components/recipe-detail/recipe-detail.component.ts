import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/book.model';
import {Router} from '@angular/router';
import {favouritesChange} from '../../../store/actions/case-object.actions';
import {select, Store} from '@ngrx/store';
import {RecipesService} from '../../../core/recipes.service';
import {selectFavourites} from '../../../store';

@Component({
  selector: 'book-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe!: Recipe;
  recipeList!: Recipe[];

  constructor(private readonly router: Router,
              public readonly bookStore: Store,
              public readonly recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.bookStore.pipe(select(selectFavourites)).subscribe((list) => {
      this.recipeList = list;
    });
  }

  editRecipe(recipe: Recipe): void {
    this.router.navigate([`/edit-recipe/${recipe.id}`]);
  }
  toggleFavourites(): void {
    this.recipe.isFavourite = !this.recipe.isFavourite;
    this.recipesService.updateRecipe(this.recipe.id, this.recipe).then((res) => {
      this.bookStore.dispatch(favouritesChange(this.recipeList.filter(recipeItem => recipeItem.isFavourite)));
    });
  }

  deleteRecipe(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe.id).then((res) => {
      if(res) {
        this.router.navigate([`/dashboard`]);
      }
    });
  }
}
