import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../../../core/theme/services/theme';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-launcher',
  imports: [BottomNav, RouterOutlet],
  template: `
    <div class="min-h-dvh bg-[var(--color-background)] pb-21 text-[var(--color-text)]">
      <main class="mx-auto max-w-2xl p-6">
        <label class="mb-6 flex items-center justify-end gap-2 text-[0.8125rem] text-[var(--color-text-muted)]">
          <input class="accent-[var(--color-primary)]" type="checkbox" [checked]="themeService.theme() === 'dark'" (change)="themeService.toggle()" />
          <span>Dark mode</span>
        </label>
        <router-outlet />
      </main>
      <app-bottom-nav />
    </div>
  `
})
export class Launcher {
  protected readonly themeService = inject(ThemeService);
}