import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { BrowserStorage } from '../../storage/services/browser-storage';

export type Theme = 'light' | 'dark';
export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark'
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storage = inject(BrowserStorage);
  readonly theme = signal<Theme>(this.getStoredTheme() ?? this.getSystemTheme());

  initialize(): void {
    this.apply(this.theme());
  }

  toggle(): void {
    if (this.theme() === ThemeEnum.Light) {
      this.set(ThemeEnum.Dark);
    } else {
      this.set(ThemeEnum.Light);
    }
  }

  set(theme: Theme): void {
    this.theme.set(theme);
    this.apply(theme);
    this.storage.setItem('ess-theme', theme);
  }

  private apply(theme: Theme): void {
    this.document.documentElement.dataset['theme'] = theme;
  }

  private getStoredTheme(): Theme | null {
    const theme = this.storage.getItem('ess-theme');
    if (theme === ThemeEnum.Light || theme === ThemeEnum.Dark) {
        return theme;
    }else{
        return null;
    }
  }

  private getSystemTheme(): Theme {
    return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ThemeEnum.Dark
      : ThemeEnum.Light;
  }
}

