import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './comonents/header/header.component';
import {FooterComponent} from './comonents/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';


const COMPONENTS = [
  FooterComponent,
  HeaderComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
