import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthStore } from '../services/auth-store';

export const authGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
    const authStore = inject(AuthStore);
    const router = inject(Router);
    if (authStore.isAuthenticated()) {
        return true;
    } else {
        return router.createUrlTree(['/auth/login'], {
            queryParams: { returnUrl: state.url }
        });
    }

};