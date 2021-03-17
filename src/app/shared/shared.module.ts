import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {GlobalSearchComponent} from './components/global-search/global-search.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FavouriteWidgetComponent } from './components/favourite-widget/favourite-widget.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    FavouriteWidgetComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    FavouriteWidgetComponent,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
