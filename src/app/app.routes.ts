import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'launcher'
	},
	{
		path: 'launcher',
		loadChildren: () =>
			import('./features/launcher/launcher.routes').then((routes) => routes.LAUNCHER_ROUTES)
	},
	{
		path: 'auth',
		loadChildren: () => import('./core/auth/auth.routes').then((routes) => routes.AUTH_ROUTES)
	},
	{
		path: '**',
		redirectTo: 'launcher'
	}
];
