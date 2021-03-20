import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/book.model';
import {Router} from '@angular/router';
import {favouritesChange} from '../../../store/actions/case-object.actions';
import {Store} from '@ngrx/store';
import {RecipesService} from '../../../core/recipes.service';

@Component({
  selector: 'book-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor(private readonly router: Router,
              public readonly bookStore: Store,
              public readonly recipesService: RecipesService) {
  }

  ngOnInit(): void {
  }

  editRecipe(recipe: Recipe): void {
    this.router.navigate([`/edit-recipe/${recipe.id}`]);
  }
  toggleFavourites(): void {
    this.recipe.isFavourite = !this.recipe.isFavourite;
    this.bookStore.dispatch(favouritesChange([{title: 'asdsa', caption: 'sadsad'}]));
  }

  deleteRecipe(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe.id).then((res) => {
      if(res) {
        this.router.navigate([`/dashboard`]);
      }
    });
  }
}
