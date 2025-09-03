import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { ExperienceComponent } from "./profile-details/experience/experience.component";
import { SkillsComponent } from "./profile-details/skills/skills.component";
import { EducationComponent } from "./profile-details/education/education.component";
import { LanguagesComponent } from "./profile-details/languages/languages.component";
import { ActivityComponent } from "./profile-details/activity/activity.component";
import { VolunteeringComponent } from "./profile-details/volunteering/volunteering.component";
import { ProjectsComponent } from "./projects/projects.component";
// Temporarily commented for debugging
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    ActivityComponent,
    VolunteeringComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio-shihab';
  activeTab = 'experience';

  tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
    { id: 'activity', label: 'Activity' },
    { id: 'volunteering', label: 'Volunteering' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only run theme initialization in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize theme based on system preference or saved preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      this.setTheme(theme);
    }
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const current = document.documentElement.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";
      this.setTheme(newTheme);
    }
  }

  private setTheme(theme: string) {
    if (isPlatformBrowser(this.platformId)) {
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
}
