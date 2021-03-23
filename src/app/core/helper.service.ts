import { Injectable } from '@angular/core';
import {Recipe} from '../shared/models/book.model';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private formBuilder: FormBuilder) { }

  capitalize(optionString: string): string {
    return optionString.charAt(0).toUpperCase() + optionString.slice(1).toLowerCase();
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
}
