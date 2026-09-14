import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, provideRouter, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BrowserStorage } from '../../storage/services/browser-storage';
import { AuthStore } from '../services/auth-store';
import { authGuard } from './auth-guard';
import { guestGuard } from './guest-guard';

describe('authentication route guards', () => {
  const route = {} as ActivatedRouteSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    TestBed.inject(BrowserStorage).clear();
  });

  it('allows an unauthenticated user to visit an auth page', () => {
    const result = TestBed.runInInjectionContext(() => guestGuard(route, state('/auth/login')));

    expect(result).toBe(true);
  });

  it('redirects an authenticated user from an auth page to Profile', () => {
    const authStore = TestBed.inject(AuthStore);
    authStore.signInWithProvider('google');

    const result = TestBed.runInInjectionContext(() => guestGuard(route, state('/auth/login')));

    expect(url(result)).toBe('/launcher/profile');
  });

  it('redirects an unauthenticated protected-route visit to Login with a return URL', () => {
    const result = TestBed.runInInjectionContext(() => authGuard(route, state('/launcher/qrcode')));

    expect(url(result)).toBe('/auth/login?returnUrl=%2Flauncher%2Fqrcode');
  });

  it('allows an authenticated user to visit a protected route', () => {
    const authStore = TestBed.inject(AuthStore);
    authStore.signInWithProvider('line');

    const result = TestBed.runInInjectionContext(() => authGuard(route, state('/launcher/profile')));

    expect(result).toBe(true);
  });

  function state(path: string): RouterStateSnapshot {
    return { url: path } as RouterStateSnapshot;
  }

  function url(result: unknown): string {
    return TestBed.inject(Router).serializeUrl(result as UrlTree);
  }
});