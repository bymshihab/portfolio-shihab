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
      institution: 'United International University (UIU)',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2016 - 2022',
      // grade: 'CGPA: 2.92/4.00',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/United_International_University_Monogram.svg/250px-United_International_University_Monogram.svg.png',
      description: 'Specialized in Software Engineering and Web Technologies. Completed thesis on "Modern Web Application Development using Angular and Node.js".',
      activities: ['Social Services Club', 'Web Development Workshop Organizer', 'Programming Contest Participant', 'Volunteer at Tech Events, Hackathons']
    },
    {
      institution: 'Süleyman Demirel University, Isparta, Turkey',
      degree: 'Studied Physics',
      duration: '2018-2020',
      // grade: 'CGPA: 3.00/4.00',  
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/S%C3%BCleyman_Demirel_University_logo.svg/250px-S%C3%BCleyman_Demirel_University_logo.svg.png',
      description: 'Focused on theoretical and applied physics courses, including Quantum Mechanics, Electromagnetism, and Thermodynamics.',
      activities: ['Physics Club Member', 'Science Fair Participant', 'Cultural Exchange Programs', 'Volunteer at University Events', 'Member of International Students Association']
    },{
       institution: 'Süleyman Demirel University, Isparta, Turkey',
      degree: 'Turkish Language Proficiency Course',
      duration: '2018-2019(9 months)',
      grade: 'C1 Level Proficiency',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/S%C3%BCleyman_Demirel_University_logo.svg/250px-S%C3%BCleyman_Demirel_University_logo.svg.png',
      description: 'Completed an intensive Turkish language course focusing on advanced grammar, conversation skills, and cultural immersion.',
      activities: [' Language Exchange Partner', 'Cultural Event Organizer', 'Volunteer at Language Workshops']
    },
    {
      institution: 'Government K.C College, Jhenaidah',
      degree: 'Higher Secondary Certificate (HSC)',
      duration: '2013- 2015',
      grade: 'GPA: 4.58/5.00',
      logo: 'https://www.kccollege.edu.bd/template/institute_logo/1_logo.jpeg',
      description: 'Science Group with focus on Mathematics, Physics, and Chemistry.',
      activities: ['Science Club Member', 'Mathematics Olympiad Participant']
    }
  ];
}
