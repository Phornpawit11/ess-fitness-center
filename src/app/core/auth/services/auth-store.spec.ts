import { TestBed } from '@angular/core/testing';
import { BrowserStorage } from '../../storage/services/browser-storage';
import { AuthStore } from './auth-store';

describe('AuthStore', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.inject(BrowserStorage).clear();
  });

  it('signs in with a valid email and persists the mock user', () => {
    const store = TestBed.inject(AuthStore);

    expect(store.signInWithEmail('member@example.com', 'password')).toBe(true);
    expect(store.isAuthenticated()).toBe(true);
    expect(store.user()).toMatchObject({
      email: 'member@example.com',
      provider: 'email'
    });
    expect(TestBed.inject(BrowserStorage).getItem('ess-auth-user')).toContain('member@example.com');
  });

  it('rejects incomplete email credentials', () => {
    const store = TestBed.inject(AuthStore);

    expect(store.signInWithEmail('', '')).toBe(false);
    expect(store.isAuthenticated()).toBe(false);
    expect(store.error()).toBe('Enter your email and password.');
  });

  it.each(['google', 'line'] as const)('signs in with the %s mock provider', (provider) => {
    const store = TestBed.inject(AuthStore);

    store.signInWithProvider(provider);

    expect(store.user()?.provider).toBe(provider);
    expect(store.isAuthenticated()).toBe(true);
  });

  it('clears the session on sign out', () => {
    const store = TestBed.inject(AuthStore);
    store.signInWithProvider('google');

    store.signOut();

    expect(store.user()).toBeNull();
    expect(store.isAuthenticated()).toBe(false);
    expect(TestBed.inject(BrowserStorage).getItem('ess-auth-user')).toBeNull();
  });
});