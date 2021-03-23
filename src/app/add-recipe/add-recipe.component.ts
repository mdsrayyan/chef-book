import {Component, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../core/recipes.service';
import {Recipe} from '../shared/models/book.model';
import {HelperService} from '../core/helper.service';

@Component({
  selector: 'book-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  files: File[] = [];
  addRecipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private readonly router: Router,
              private readonly helperService: HelperService,
              private recipeService: RecipesService) {
    this.addRecipeForm = this.helperService.createRecipeFormGroup(new Recipe({}));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.recipeService.getRecipeById(params.id).subscribe((recipe) => {
          this.addRecipeForm = this.helperService.createRecipeFormGroup(new Recipe(recipe));
        });
      }
    });
  }

  /**
   * @summary Adds a file when dropped or selected
   * @param event - This holds event from click event and files that are uploaded
   */
  onSelect(event): void {
    this.files.push(...event.addedFiles);
    if(this.files.length > 1){ // checking if files array has more than one content
      this.replaceFile(); // replace file
    }
  }
  /**
   * @summary replaces file if they are more than one
   */
  replaceFile(){
    this.files.splice(0,1); // index =0 , remove_count = 1
  }
  /**
   * @summary Click event fired when remove button clicked in drag-drop zone
   * @param event - This holds event from click event and files that has to be removed
   */
  onRemove(event): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  /**
   * @summary generate payload and calls add recipe service
   * @param formDirective - This holds form's latest information
   */
  onSubmit(formDirective: FormGroupDirective): void {
    const payload = formDirective.form.value as Recipe;
    payload.addedDate = new Date().toDateString();
    payload.modifiedDate = new Date().toDateString();
    this.recipeService.addRecipe(payload, this.files[0]);
  }

}
