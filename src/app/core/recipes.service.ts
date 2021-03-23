import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from '../shared/models/book.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {finalize, map, switchMap} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private fireService: AngularFirestore,
              private fireStorage: AngularFireStorage,
              private readonly router: Router) { }

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

  getRecipesByCategory(category: string): Observable<Recipe[]> {
    const recipeList: Recipe[] = [];
    return this.fireService.collection(`recipes`)
      .get()
      .pipe(map(actions => {
        actions.docs.forEach((doc) => {
          const payload: Recipe = doc.data() as Recipe;
          payload.id = doc.id;
          recipeList.push(payload as Recipe);
        });
        return recipeList.filter(recipe => recipe.category === category) as Recipe[];
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

  addRecipe(data: Recipe, photo: File){
    const filePath = `${photo.name}_${new Date().getTime()}`;
    const fileRef = this.fireStorage.ref(filePath);
    this.fireStorage.upload(filePath, photo).snapshotChanges().pipe(
      finalize (() => {
        fileRef.getDownloadURL().subscribe((url) => {
          data.filePath = url;
          return this.fireService.collection('recipes').add(data)
            .then((docRef) => {
              this.router.navigate([`recipe/${docRef.id}`]);
            })
            .catch(() => {
              return null
            });
        })
      })
    ).subscribe();
  }

  deleteRecipe(id: string) {
      return this.fireService.collection('recipes').doc(id).delete()
        .then(() => {
          return true;
        })
          .catch(() => {
            return null
          });
  }

}
