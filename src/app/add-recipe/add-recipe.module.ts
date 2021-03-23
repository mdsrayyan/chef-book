import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddRecipeComponent} from './add-recipe.component';
import {SharedModule} from '../shared/shared.module';
import {AddRecipeRoutingModule} from './add-recipe-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddRecipeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AddRecipeRoutingModule,
    NgxDropzoneModule
  ]
})
export class AddRecipeModule {
}
