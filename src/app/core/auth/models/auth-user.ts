export type AuthProvider = 'email' | 'google' | 'line';

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  provider: AuthProvider;
}