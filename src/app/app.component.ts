import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [ HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio-shihab';

  ngOnInit() {
    // Initialize theme based on system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.setTheme(theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    this.setTheme(newTheme);
  }

  private setTheme(theme: string) {
    // Set DaisyUI theme
    document.documentElement.setAttribute("data-theme", theme);

    // Set Tailwind dark mode class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save preference
    localStorage.setItem('theme', theme);
  }
}
