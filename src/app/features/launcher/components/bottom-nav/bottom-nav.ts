import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav aria-label="Primary navigation" class="fixed inset-x-0 bottom-0 grid grid-cols-3 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <a class="grid min-h-19 place-items-center gap-1 text-xs font-semibold text-[var(--color-text-muted)] no-underline [&.is-active]:text-[var(--color-primary)]" routerLink="news" routerLinkActive="is-active">
        <span aria-hidden="true" class="grid size-6 place-items-center rounded-full bg-current text-[0.7rem] text-[var(--color-primary-on)]">N</span>
        <span>News</span>
      </a>
      <a class="grid min-h-19 place-items-center gap-1 text-xs font-semibold text-[var(--color-text-muted)] no-underline [&.is-active]:text-[var(--color-primary)]" routerLink="qrcode" routerLinkActive="is-active">
        <span aria-hidden="true" class="grid size-6 place-items-center rounded-full bg-current text-[0.7rem] text-[var(--color-primary-on)]">#</span>
        <span>QR Code</span>
      </a>
      <a class="grid min-h-19 place-items-center gap-1 text-xs font-semibold text-[var(--color-text-muted)] no-underline [&.is-active]:text-[var(--color-primary)]" routerLink="profile" routerLinkActive="is-active">
        <span aria-hidden="true" class="grid size-6 place-items-center rounded-full bg-current text-[0.7rem] text-[var(--color-primary-on)]">P</span>
        <span>Profile</span>
      </a>
    </nav>
  `
})
export class BottomNav {}