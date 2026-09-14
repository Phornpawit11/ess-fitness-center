import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrowserStorage {
  private readonly memory = new Map<string, string>();

  getItem(key: string): string | null {
    return this.storage?.getItem(key) ?? this.memory.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.storage) {
      this.storage.setItem(key, value);
      return;
    }

    this.memory.set(key, value);
  }

  removeItem(key: string): void {
    if (this.storage) {
      this.storage.removeItem(key);
      return;
    }

    this.memory.delete(key);
  }

  clear(): void {
    if (this.storage) {
      this.storage.clear();
      return;
    }

    this.memory.clear();
  }

  private get storage(): Storage | null {
    try {
      return typeof localStorage === 'undefined' ? null : localStorage;
    } catch {
      return null;
    }
  }
}