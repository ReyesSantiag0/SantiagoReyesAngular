import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TracklistComponent } from './tracklist/tracklist.component';


@NgModule({
  declarations: [
    TracklistComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TrackModule { }
