import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe.component';
import {SharedModule} from '../shared/shared.module';
import {AddRecipeRoutingModule} from './add-recipe-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [AddRecipeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    AddRecipeRoutingModule
  ]
})
export class AddRecipeModule { }
