import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  template: `
    <main>
      <h1>Create an account</h1>
      <p>Join ESS Fitness Center.</p>
      <a routerLink="/auth/login">Already have an account?</a>
    </main>
  `
})
export class Register {}