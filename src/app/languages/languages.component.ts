import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages = [
    {
      name: 'Bengali',
      proficiency: 'Native or Bilingual',
      level: 100,
      flag: '🇧🇩'
    },
    {
      name: 'English',
      proficiency: 'Professional Working',
      level: 85,
      flag: '🇺🇸'
    },
    {
      name: 'Hindi',
      proficiency: 'Limited Working',
      level: 60,
      flag: '🇮🇳'
    },
    {
      name: 'Arabic',
      proficiency: 'Elementary',
      level: 30,
      flag: '🇸🇦'
    }
  ];
}
