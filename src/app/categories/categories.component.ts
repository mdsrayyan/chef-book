import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../core/recipes.service';
import {Observable} from 'rxjs';
import {Recipe} from '../shared/models/book.model';
import {HelperService} from '../core/helper.service';

@Component({
  selector: 'book-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category: string;
  recipeList$!: Observable<Recipe[]>;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              public readonly helperService: HelperService) {
    this.category = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params.id;
      this.recipeList$ = this.recipeService.getRecipesByCategory(params.id);
    });
  }

}
