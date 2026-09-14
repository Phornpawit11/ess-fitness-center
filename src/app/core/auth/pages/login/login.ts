import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthStore } from '../../services/auth-store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authStore = inject(AuthStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly isSubmitting = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  protected signInWithEmail(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const { email, password } = this.form.getRawValue();

    if (this.authStore.signInWithEmail(email, password)) {
      this.navigateAfterSignIn();
      return;
    }

    this.error.set(this.authStore.error());
    this.isSubmitting.set(false);
  }

  protected signInWithProvider(provider: 'google' | 'line'): void {
    this.authStore.signInWithProvider(provider);
    this.navigateAfterSignIn();
  }

  private navigateAfterSignIn(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    if (returnUrl?.startsWith('/') && !returnUrl.startsWith('//')) {
      void this.router.navigateByUrl(returnUrl);
    } else {
      void this.router.navigateByUrl("/launcher/profile");
    }

  }
}