import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
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
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import { ImageGridLoaderComponent } from './components/loaders/image-grid-loader/image-grid-loader.component';
import { ShortDescriptionLoaderComponent } from './components/loaders/short-description-loader/short-description-loader.component';
import { LongDescriptionLoaderComponent } from './components/loaders/long-description-loader/long-description-loader.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    FavouriteWidgetComponent,
    ChefIntroWidgetComponent,
    RecentWidgetComponent,
    RecipeDetailComponent,
    ImageGridLoaderComponent,
    ShortDescriptionLoaderComponent,
    LongDescriptionLoaderComponent,
    ConfirmationDialogComponent
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
    MatDialogModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    FavouriteWidgetComponent,
    ChefIntroWidgetComponent,
    RecentWidgetComponent,
    RecipeDetailComponent,
    ImageGridLoaderComponent,
    ShortDescriptionLoaderComponent,
    LongDescriptionLoaderComponent,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class SharedModule { }
