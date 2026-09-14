import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../../../core/theme/services/theme';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-launcher',
  imports: [BottomNav, RouterOutlet],
  templateUrl: './launcher.html',
  styleUrl: './launcher.css'
})
export class Launcher {
  protected readonly themeService = inject(ThemeService);
}