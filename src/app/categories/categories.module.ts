import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule {
}
