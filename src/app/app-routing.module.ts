import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ValidationComponent } from './modules/auth/validation/validation.component';
import { MarcadoresComponent } from './modules/favoritos/marcadores/marcadores.component';
import { HistoryMenuComponent } from './modules/history/history-menu/history-menu.component';
import { FooterComponent } from './modules/home/footer/footer.component';
import { HeadersComponent } from './modules/home/headers/headers.component';
import { TracklistComponent } from './modules/track/tracklist/tracklist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  {
    //auth/LOGIN
    path: 'login',
    component: LoginPageComponent,
  },

  {
    //auth/register
    path: 'register',
    component: RegisterComponent,
  },

  {
    //auth/validation
    path: 'validation',
    component: ValidationComponent,
  },

  {
    //favoritos/marcadores
    path: 'marcadores',
    component: MarcadoresComponent,
  },

  {
    //history/HistoryMenu
    path: 'HistoryMenu',
    component: HistoryMenuComponent,
  },

  {
    //home/headers
    path: 'headers',
    component: HeadersComponent,
  },

  {
    //home/footer
    path: 'footer',
    component: FooterComponent,
  },

  {
    //track/tracklist
    path: 'tracklist',
    component: TracklistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
