import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations = [
    {
      institution: 'University of Dhaka',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2018 - 2022',
      grade: 'CGPA: 3.85/4.00',
      logo: 'https://via.placeholder.com/48x48/dc2626/ffffff?text=DU',
      description: 'Specialized in Software Engineering and Web Technologies. Completed thesis on "Modern Web Application Development using Angular and Node.js".',
      activities: ['Programming Club President', 'Web Development Workshop Organizer', 'Dean\'s List (2020, 2021)']
    },
    {
      institution: 'Dhaka College',
      degree: 'Higher Secondary Certificate (HSC)',
      duration: '2016 - 2018',
      grade: 'GPA: 5.00/5.00',
      logo: 'https://via.placeholder.com/48x48/059669/ffffff?text=DC',
      description: 'Science Group with focus on Mathematics, Physics, and Chemistry.',
      activities: ['Science Club Member', 'Mathematics Olympiad Participant']
    }
  ];
}
