import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from 'src/app/mycomponent/mycomponent.component';

const routes: Routes = [
  {
    path: '', //Localhost:60790/
    component: MycomponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
