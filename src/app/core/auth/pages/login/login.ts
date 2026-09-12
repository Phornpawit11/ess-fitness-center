import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  template: `
    <main>
      <h1>Sign in</h1>
      <p>Access your fitness center account.</p>
      <a routerLink="/auth/register">Create an account</a>
    </main>
  `
})
export class Login {}