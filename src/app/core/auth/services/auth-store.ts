import { Injectable, computed, inject, signal } from '@angular/core';
import { AuthProvider, AuthUser } from '../models/auth-user';
import { BrowserStorage } from '../../storage/services/browser-storage';

const AUTH_SESSION_KEY = 'ess-auth-user';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly storage = inject(BrowserStorage);
  readonly user = signal<AuthUser | null>(this.getStoredUser());
  readonly isAuthenticated = computed(() => this.user() !== null);
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  signInWithEmail(email: string, password: string): boolean {
    if (!email.trim() || !password) {
      this.error.set('Enter your email and password.');
      return false;
    }

    this.signIn(this.createUser(email, 'email'));
    return true;
  }

  signInWithProvider(provider: Exclude<AuthProvider, 'email'>): void {
    const email = provider === 'google' ? 'member@gmail.com' : 'member@line.me';
    this.signIn(this.createUser(email, provider));
  }

  signIn(user: AuthUser): void {
    this.user.set(user);
    this.error.set(null);
    this.storage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
  }

  signOut(): void {
    this.user.set(null);
    this.error.set(null);
    this.storage.removeItem(AUTH_SESSION_KEY);
  }

  private createUser(email: string, provider: AuthProvider): AuthUser {
    const displayName = email.split('@')[0] || 'ESS Member';

    return {
      id: `mock-${provider}-${email}`,
      email,
      displayName,
      provider
    };
  }

  private getStoredUser(): AuthUser | null {
    const storedUser = this.storage.getItem(AUTH_SESSION_KEY);

    if (!storedUser) {
      return null;
    }

    try {
      const user = JSON.parse(storedUser) as Partial<AuthUser>;
      return this.isValidUser(user) ? user : null;
    } catch {
      this.storage.removeItem(AUTH_SESSION_KEY);
      return null;
    }
  }

  private isValidUser(user: Partial<AuthUser>): user is AuthUser {
    return typeof user.id === 'string'
      && typeof user.email === 'string'
      && typeof user.displayName === 'string'
      && (user.provider === 'email' || user.provider === 'google' || user.provider === 'line');
  }
}