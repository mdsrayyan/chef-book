import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {AboutRoutingModule} from './about-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FlexLayoutModule
  ]
})
export class AboutModule { }
