import { Routes } from '@angular/router';

export const QRCODE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/qrcode/qrcode').then((component) => component.Qrcode)
  }
];