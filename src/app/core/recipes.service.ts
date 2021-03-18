import { Injectable } from '@angular/core';
import recipeMockList from './mock-data/mock-recipe-list';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Recipe} from '../shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipeList: Recipe[] = JSON.parse(JSON.stringify(recipeMockList));
  private accountDetailsSubject$: BehaviorSubject<Recipe[]> = new BehaviorSubject(this.recipeList);
  constructor() { }

  getRecipeList(): Observable<Recipe[]> {
    return this.accountDetailsSubject$.asObservable();
  }
  getFavouriteRecipeList(): Observable<Recipe[]> {
    return (new BehaviorSubject(this.recipeList.filter(recipe => recipe.isFavourite)))
  }
  getRecentRecipeList(): Observable<Recipe[]> {
    return this.accountDetailsSubject$.asObservable();
  }
  getRecipeById(recipeId: string): Observable<Recipe> {
    return (new BehaviorSubject(this.recipeList.filter(recipe => JSON.stringify(recipe.id) === recipeId)[0]))
  }

}
