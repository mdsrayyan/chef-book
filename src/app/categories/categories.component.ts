import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../core/recipes.service';
import {Recipe} from '../shared/models/book.model';
import {HelperService} from '../core/helper.service';

@Component({
  selector: 'book-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category: string;
  recipes: Recipe[];
  fetchingData: boolean;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private readonly router: Router,
              public readonly helperService: HelperService) {
    this.category = '';
    this.recipes = [];
    this.fetchingData = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params.id;
      this.fetchingData = true;
      if (params.id === 'favourites') {
        this.getAllFavourites();
      } else {
        this.getFavouritesByCategory(params.id);
      }
    });
  }

  navigateToRecipe(recipe: Recipe): void {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }

  getAllFavourites() {
    this.recipeService.getFavouriteRecipeList().subscribe((recipes: Recipe[]) => {
      this.fetchingData = false;
      this.recipes = recipes;
    });
  }

  getFavouritesByCategory(category: string) {
    this.recipeService.getRecipesByCategory(category).subscribe((recipes: Recipe[]) => {
      this.fetchingData = false;
      this.recipes = recipes;
    });
  }

}
