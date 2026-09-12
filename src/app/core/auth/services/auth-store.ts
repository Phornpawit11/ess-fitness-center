import { Injectable, signal } from '@angular/core';
import { AuthUser } from '../models/auth-user';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  readonly user = signal<AuthUser | null>(null);
  readonly isAuthenticated = signal(false);

  signIn(user: AuthUser): void {
    this.user.set(user);
    this.isAuthenticated.set(true);
  }

  signOut(): void {
    this.user.set(null);
    this.isAuthenticated.set(false);
  }
}