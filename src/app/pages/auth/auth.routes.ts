import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'


export const AUTH_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent }
];
