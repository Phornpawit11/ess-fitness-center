import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  imports: [RouterLink],
  template: `
    <main>
      <h1>Reset password</h1>
      <p>We'll help you get back into your account.</p>
      <a routerLink="/auth/login">Back to sign in</a>
    </main>
  `
})
export class PasswordRecovery {}