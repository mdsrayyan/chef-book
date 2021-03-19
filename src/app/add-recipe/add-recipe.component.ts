import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../core/recipes.service';
import {Recipe} from '../shared/models/book.model';

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
              private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.recipeService.getRecipeById(params.id).subscribe((recipe) => {
          this.addRecipeForm = this.createRecipeFormGroup(new Recipe(recipe));
        });
      } else {
        this.addRecipeForm = this.createRecipeFormGroup(new Recipe({}));
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
    console.log(formDirective);
  }

}
