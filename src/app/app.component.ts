import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./hero/hero.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { EducationComponent } from "./education/education.component";
import { LanguagesComponent } from "./languages/languages.component";
import { ActivityComponent } from "./activity/activity.component";
import { VolunteeringComponent } from "./volunteering/volunteering.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    ActivityComponent,
    VolunteeringComponent,
    ProjectsComponent
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

  ngOnInit() {
    // Initialize theme based on system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.setTheme(theme);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
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
