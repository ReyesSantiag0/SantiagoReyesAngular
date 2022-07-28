import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { MarcadoresComponent } from './marcadores/marcadores.component';


@NgModule({
  declarations: [
    MarcadoresComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
