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
      level: 75,
      flag: '🇺🇸'
    },
    // {
    //   name: 'Hindi',
    //   proficiency: 'Limited Working',
    //   level: 60,
    //   flag: '🇮🇳'
    // },
    {
      name: 'Turkish',
      proficiency: 'C1 Level Proficiency',
      level: 80,
      flag: '🇹🇷'
    }
  ];
}
