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
      company: 'KloverCloud',
      position: 'Software Engineer',
      duration: 'April 2025 - Present',
      location: 'Dhaka, Bangladesh',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQGFyb7pO9Lpfg/company-logo_100_100/company-logo_100_100/0/1630587124719?e=1760572800&v=beta&t=Np_K9A0_8wtxwIs3QAVbGqiaBGW3NgmnRUsTkEW5JUA',
      description: 'Developing scalable web applications using Angular, TypeScript, and modern web technologies. Working on enterprise-level projects with microservices architecture.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Unit Testing', 'Git', 'Agile']
    },
    {
      company: 'NDE Steel Structures Ltd.',
      position: 'Associate Software Engineer',
      duration: 'Jul 2023 - March 2025',
      location: 'Dhaka, Bangladesh',
       logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQG7uRecCytUJQ/company-logo_100_100/company-logo_100_100/0/1631332407725?e=1760572800&v=beta&t=prBvKzSfKj35CiuNaADOdiTz37Zgn7GvUZIFrw0_RQY',
      description: 'Contributed to the development of internal tools and client-facing applications. Improved application performance and user experience through code optimization and modern design practices.',
      skills: ['JavaScript', 'React', 'CSS', 'Git', 'Agile', 'MSSQL', '.NET']
    },
    {
      company: 'NDE Steel Structures Ltd.',
      position: 'Software Engineer Intern',
      duration: 'Dec 2022 - Jun 2023',
      location: 'Remote',
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQG7uRecCytUJQ/company-logo_100_100/company-logo_100_100/0/1631332407725?e=1760572800&v=beta&t=prBvKzSfKj35CiuNaADOdiTz37Zgn7GvUZIFrw0_RQY',
      description: 'Developed custom websites for small businesses and startups. Focused on modern UI/UX design and performance optimization.',
      skills: ['HTML', 'CSS', 'JavaScript', ' Bootstrap']
    }
  ];
}
