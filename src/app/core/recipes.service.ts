import { Injectable } from '@angular/core';
import recipeMockList from './mock-data/mock-recipe-list';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Recipe} from '../shared/models/book.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipeList: Recipe[] = [];
  constructor(private fireService: AngularFirestore) { }

  getRecipeList(): Observable<Recipe[]> {
    const recipeList: Recipe[] = [];
    return this.fireService.collection('recipes').get()
      .pipe(map(actions => {
        actions.docs.forEach((doc) => {
          const payload: Recipe = doc.data() as Recipe;
          payload.id = doc.id;
          recipeList.push(payload as Recipe);
        });
        return recipeList as Recipe[];
      }));
  }
  getFavouriteRecipeList(): Observable<Recipe[]> {
    const recipeList: Recipe[] = [];
    return this.fireService.collection('recipes').get()
      .pipe(map(actions => {
        actions.docs.forEach((doc) => {
          const payload: Recipe = doc.data() as Recipe;
          payload.id = doc.id;
          recipeList.push(payload as Recipe);
        });
        return recipeList.filter(recipe => recipe.isFavourite) as Recipe[];
      }));
  }
  getRecipeById(recipeId: string): Observable<Recipe> {
    return this.fireService.collection(`recipes`)
      .doc('/' + recipeId)
      .get()
      .pipe(map(actions => {
        const payload: Recipe = actions.data() as Recipe;
        payload.id = actions.id;
        return payload as Recipe;
      }));
  }

  updateRecipe(id: string, payload: Recipe) {
    return this.fireService.collection(`recipes`)
      .doc('/' + id)
      .update(payload)
      .then(() => {
        console.log('done');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  addRecipe(data): Promise<any> {
    return this.fireService.collection('recipes').add(data)
      .then((docRef) => {
        return docRef;
      })
      .catch((error) => {
        return null
      });
  }

  deleteRecipe(id) {
      return this.fireService.collection('recipes').doc(id).delete()
        .then((docRef) => {
          return true;
        })
          .catch((error) => {
            return null
          });
  }

}
