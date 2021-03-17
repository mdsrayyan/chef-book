import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddRecipeComponent} from './add-recipe.component';

const routes: Routes = [
  {path: '', component: AddRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRecipeRoutingModule{ }
