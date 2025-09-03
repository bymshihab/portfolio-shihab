import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, ElementRef } from '@angular/core';
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
import { ContactComponent } from "./contact/contact.component";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio-shihab';
  activeTab = 'experience';
  isMobile = false;

  tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
    { id: 'activity', label: 'Activity' },
    { id: 'volunteering', label: 'Volunteering' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    // Only run theme initialization in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize theme based on system preference or saved preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      this.setTheme(theme);

      // Check if mobile
      this.checkMobile();
      window.addEventListener('resize', () => this.checkMobile());
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          this.initializeAnimations();
        }, 100);
      } catch (error) {
        console.warn('GSAP initialization failed, using CSS fallbacks:', error);
      }
    }
  }  private checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  private initializeAnimations() {
    try {
      const mm = gsap.matchMedia();

      // Desktop animations
      mm.add("(min-width: 768px)", () => {
        // Reset initial states for GSAP control
        gsap.set('.hero-section', { opacity: 0, y: 50 });
        gsap.set('.animate-section', { opacity: 0, y: 60, scale: 0.95 });

        // Hero section animation
        gsap.to('.hero-section', {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        });

        // Sections animation with scroll trigger
        gsap.utils.toArray('.animate-section').forEach((section: any, index) => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });
        });

        // Tab content animations
        this.animateTabContent();

        // Floating background elements
        this.createFloatingElements();
      });

      // Mobile animations (lighter and faster)
      mm.add("(max-width: 767px)", () => {
        // Reset initial states for mobile
        gsap.set('.hero-section', { opacity: 0, y: 30 });
        gsap.set('.animate-section', { opacity: 0, y: 20 });

        // Simpler hero animation for mobile
        gsap.to('.hero-section', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });

        // Lighter section animations for mobile
        gsap.utils.toArray('.animate-section').forEach((section: any, index) => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          });
        });
      });
    } catch (error) {
      console.warn('GSAP animations failed, using CSS fallbacks:', error);
      // Ensure content is visible if GSAP fails
      const elements = document.querySelectorAll('.hero-section, .animate-section, .tab-content');
      elements.forEach(el => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }
  }  private animateTabContent() {
    try {
      const tabContent = this.elementRef.nativeElement.querySelector('.tab-content');
      if (tabContent) {
        // Reset and animate
        gsap.set(tabContent, { opacity: 0, x: 20 });
        gsap.to(tabContent, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    } catch (error) {
      console.warn('Tab content animation failed:', error);
      // Fallback to CSS animation
      const tabContent = this.elementRef.nativeElement.querySelector('.tab-content');
      if (tabContent) {
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateX(0)';
      }
    }
  }

  private createFloatingElements() {
    // Create floating particles for desktop only
    if (!this.isMobile) {
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
          position: fixed;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: rgba(34, 197, 94, ${Math.random() * 0.3 + 0.1});
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        document.body.appendChild(particle);

        gsap.to(particle, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;

    // Animate tab change with GSAP
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.animateTabContent();
      }, 50);
    }
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
