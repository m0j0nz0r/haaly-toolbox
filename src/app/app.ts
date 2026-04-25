import { Component, OnInit, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('haaly-toolbox');
  protected darkMode = signal(false);

  isSidebarOpen = signal(true);

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }

  ngOnInit() {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode.set(true);
    }
    this.applyTheme();
  }

  toggleDarkMode() {
    this.darkMode.update(v => !v);
    this.applyTheme();
  }

  private applyTheme() {
    const darkClass = 'dark';
    const theme = this.darkMode() ? 'dark' : 'light';
    const isDark = document.body.classList.contains(darkClass);
    if (this.darkMode() && !isDark) {
      document.body.classList.add(darkClass);
    } else if (!this.darkMode() && isDark) {
      document.body.classList.remove(darkClass);
    }
    localStorage.setItem('theme', theme);
  }
}
