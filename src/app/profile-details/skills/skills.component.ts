import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Frontend Technologies',
      skills: [
        { name: 'Angular', level: 90, endorsements: 45 },
        { name: 'TypeScript', level: 85, endorsements: 38 },
        { name: 'JavaScript', level: 88, endorsements: 52 },
        { name: 'HTML5', level: 95, endorsements: 42 },
        { name: 'CSS3', level: 90, endorsements: 35 },
        { name: 'Tailwind CSS', level: 85, endorsements: 28 }
      ]
    },
    {
      category: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 80, endorsements: 32 },
        { name: 'Express.js', level: 75, endorsements: 25 },
        { name: 'MongoDB', level: 70, endorsements: 22 },
        { name: 'PostgreSQL', level: 65, endorsements: 18 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, endorsements: 40 },
        { name: 'Docker', level: 70, endorsements: 20 },
        { name: 'AWS', level: 60, endorsements: 15 },
        { name: 'Figma', level: 75, endorsements: 25 }
      ]
    }
  ];
}
