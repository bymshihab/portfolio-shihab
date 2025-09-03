import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-volunteering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volunteering.component.html',
  styleUrl: './volunteering.component.css'
})
export class VolunteeringComponent {
  volunteering = [
    {
      organization: 'Code for Bangladesh',
      role: 'Frontend Developer',
      duration: 'Jan 2023 - Present',
      cause: 'Science and Technology',
      logo: 'https://via.placeholder.com/48x48/059669/ffffff?text=CFB',
      description: 'Contributing to open-source projects that help digitize government services and improve citizen experience.',
      skills: ['Angular', 'TypeScript', 'Open Source'],
      impact: 'Helped develop 3 civic applications serving 10,000+ citizens'
    },
    {
      organization: 'Tech Education Initiative',
      role: 'Programming Instructor',
      duration: 'Jun 2022 - Dec 2022',
      cause: 'Education',
      logo: 'https://via.placeholder.com/48x48/7c3aed/ffffff?text=TEI',
      description: 'Teaching basic programming concepts to underprivileged students in rural areas.',
      skills: ['Teaching', 'JavaScript', 'Web Development'],
      impact: 'Trained 50+ students in basic programming skills'
    },
    {
      organization: 'Digital Literacy Campaign',
      role: 'Workshop Facilitator',
      duration: 'Mar 2022 - May 2022',
      cause: 'Education',
      logo: 'https://via.placeholder.com/48x48/dc2626/ffffff?text=DLC',
      description: 'Conducting workshops on digital literacy for elderly citizens and small business owners.',
      skills: ['Training', 'Digital Literacy', 'Community Outreach'],
      impact: 'Reached 200+ community members across 5 workshops'
    }
  ];
}
