import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeComponent} from './recipe.component';
import {RecipeRoutingModule} from './recipe-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class RecipeModule {
}
