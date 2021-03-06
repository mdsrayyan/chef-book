import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {RecipesService} from '../../../core/recipes.service';
import {Recipe} from '../../models/book.model';
import {HelperService} from '../../../core/helper.service';

@Component({
  selector: 'book-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  myControl = new FormControl();
  options: Recipe[];
  filteredOptions: Observable<Recipe[]>;
  constructor(private readonly recipeService: RecipesService,
              private readonly router: Router,
              public readonly helperService: HelperService) { }

  ngOnInit(): void {
    this.recipeService.getRecipeList().subscribe((recipeList) => {
      this.options = recipeList;
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Recipe[] {
    const filterValue = value.toLowerCase();

    return this.options && this.options.length && this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  navigate(option: Recipe): void {
    this.router.navigate([`/recipe/${option?.id}`]);
  }

  clearControl(): void {
    this.myControl.setValue('');
  }
}
