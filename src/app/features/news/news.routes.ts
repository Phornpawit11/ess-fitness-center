import { Routes } from '@angular/router';

export const NEWS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/news/news').then((component) => component.News)
  }
];