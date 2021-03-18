import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../core/recipes.service';
import {Observable} from 'rxjs';
import {Recipe} from '../shared/models/book.model';

@Component({
  selector: 'book-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Recipe>;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipe$ = this.recipeService.getRecipeById(params.id);
    });
  }


}
