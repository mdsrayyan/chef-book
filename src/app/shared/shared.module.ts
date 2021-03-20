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
import { ChefIntroWidgetComponent } from './components/chef-intro-widget/chef-intro-widget.component';
import { RecentWidgetComponent } from './components/recent-widget/recent-widget.component';
import {MatDividerModule} from '@angular/material/divider';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    FavouriteWidgetComponent,
    ChefIntroWidgetComponent,
    RecentWidgetComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    FavouriteWidgetComponent,
    ChefIntroWidgetComponent,
    RecentWidgetComponent,
    RecipeDetailComponent,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
