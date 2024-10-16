import { Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { HomePage } from './home/home.page';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
];
