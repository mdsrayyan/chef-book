import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../core/recipes.service';
import {Recipe} from '../shared/models/book.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'book-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  recipeList$: Observable<Recipe[]>;
  favouriteRecipeList$: Observable<Recipe[]>;
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeList$ = this.recipeService.getRecipeList();
    this.favouriteRecipeList$ = this.recipeService.getFavouriteRecipeList();
  }

}
