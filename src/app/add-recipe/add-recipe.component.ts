import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../core/recipes.service';
import {Recipe} from '../shared/models/book.model';
import firebase from 'firebase';

@Component({
  selector: 'book-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  files: File[] = [];
  addRecipeForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private readonly router: Router,
              private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.addRecipeForm = this.createRecipeFormGroup(new Recipe({}));
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.recipeService.getRecipeById(params.id).subscribe((recipe) => {
          this.addRecipeForm = this.createRecipeFormGroup(new Recipe(recipe));
        });
      }
    });
  }
  createRecipeFormGroup(data: Recipe) {
    data = data || {};
    return this.formBuilder.group({
      title: [data.title || '', Validators.required],
      category: [data.category || '', Validators.required],
      caption: [data.caption || ''],
      preparationTime: [data.preparationTime || '', Validators.required],
      cookTime: [data.cookTime || '', Validators.required],
      servings: [data.servings || '', Validators.required],
      description: [data.description || ''],
      ingredients: [data.ingredients || '', Validators.required],
      instructions: [data.instructions || '', Validators.required],
      addedDate: [data.addedDate || ''],
      modifiedDate: [data.modifiedDate || ''],
      files: [data.files || '']
    });
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit(formDirective: FormGroupDirective): void {
    const payload = formDirective.form.value as Recipe;
    payload.addedDate = new Date().toDateString();
    payload.modifiedDate = new Date().toDateString();
    this.recipeService.addRecipe(payload, this.files[0]);
  }

}
