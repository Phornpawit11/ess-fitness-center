import { Routes } from '@angular/router';

export const LAUNCHER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/launcher/launcher').then((component) => component.Launcher),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'news' },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.routes').then((routes) => routes.PROFILE_ROUTES)
      },
      {
        path: 'qrcode',
        loadChildren: () => import('../qrcode/qrcode.routes').then((routes) => routes.QRCODE_ROUTES)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.routes').then((routes) => routes.NEWS_ROUTES)
      },
      {
        path: '**',
        redirectTo: 'news'
      }
    ]
  }
];