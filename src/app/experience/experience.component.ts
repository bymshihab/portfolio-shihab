import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'KloverCloud Limited',
      position: 'Software Engineer',
      duration: 'Jan 2023 - Present',
      location: 'Dhaka, Bangladesh',
      logo: 'https://via.placeholder.com/48x48/1e40af/ffffff?text=KC',
      description: 'Developing scalable web applications using Angular, TypeScript, and modern web technologies. Working on enterprise-level projects with microservices architecture.',
      skills: ['Angular', 'TypeScript', 'Node.js', 'MongoDB']
    },
    {
      company: 'Tech Solutions BD',
      position: 'Junior Developer',
      duration: 'Jun 2022 - Dec 2022',
      location: 'Dhaka, Bangladesh',
      logo: 'https://via.placeholder.com/48x48/059669/ffffff?text=TS',
      description: 'Built responsive web applications and collaborated with cross-functional teams to deliver high-quality software solutions.',
      skills: ['JavaScript', 'React', 'CSS', 'Git']
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      duration: 'Jan 2022 - May 2022',
      location: 'Remote',
      logo: 'https://via.placeholder.com/48x48/7c3aed/ffffff?text=FL',
      description: 'Developed custom websites for small businesses and startups. Focused on modern UI/UX design and performance optimization.',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress']
    }
  ];
}
