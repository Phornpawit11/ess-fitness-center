import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../../core/auth/services/auth-store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  protected readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  protected signOut(): void {
    this.authStore.signOut();
    void this.router.navigateByUrl('/launcher/news');
  }
}