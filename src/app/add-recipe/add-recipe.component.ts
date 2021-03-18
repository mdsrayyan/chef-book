import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'book-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  files: File[] = [];
  addRecipeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addRecipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      caption: [''],
      preparationTime: ['', Validators.required],
      cookTime: ['', Validators.required],
      servings: ['', Validators.required],
      description: [''],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      files: ['']
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
