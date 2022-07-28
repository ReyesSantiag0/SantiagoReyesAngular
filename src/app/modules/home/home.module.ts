import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeadersComponent } from './headers/headers.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeadersComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
