import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((component) => component.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then((component) => component.Register)
  },
  {
    path: 'password-recovery',
    loadComponent: () =>
      import('./pages/password-recovery/password-recovery').then((component) => component.PasswordRecovery)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];