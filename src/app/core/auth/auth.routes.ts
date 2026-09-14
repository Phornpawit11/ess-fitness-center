import { Routes } from '@angular/router';
import { guestGuard } from './guards/guest-guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/login/login').then((component) => component.Login)
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/register/register').then((component) => component.Register)
  },
  {
    path: 'password-recovery',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/password-recovery/password-recovery').then((component) => component.PasswordRecovery)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];