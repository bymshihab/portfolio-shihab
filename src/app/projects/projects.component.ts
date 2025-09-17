import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, Project } from '../project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // Use the existing projects data and extend it
  projects: (Project & {
    id: number;
    status: string;
    featured: boolean;
    technologies: string[];
    githubUrl: string;
    liveUrl: string | null;
  })[] = [
    {
      id: 1,
      title: 'NDE Holding Limited (Real state app)',
      description: 'A full-featured e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      image: 'img/holdings.png',
      tech: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/bymshihab/holdings-demo',
      githubUrl: 'https://github.com/bymshihab/holdings-demo',
      demo: 'https://holdings-demo-e6wb5cl8x-bymshihabs-projects.vercel.app/index.html',
      liveUrl: 'https://holdings-demo-e6wb5cl8x-bymshihabs-projects.vercel.app/index.html',
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: 'Hotel XYZ Booking System',
      description: 'A comprehensive hotel booking system with room management, booking calendar, and customer reviews.',
      image: 'img/hotel_cover.png',
      tech: ['Html', 'CSS', 'JavaScript', 'GSAP'],
      technologies:  ['Html', 'CSS', 'JavaScript', 'GSAP'],
      github: 'https://github.com/bymshihab/hotel-xyz',
      githubUrl: 'https://github.com/bymshihab/hotel-xyz',
      demo: 'https://hotel-xyz.vercel.app/',
      liveUrl: 'https://hotel-xyz.vercel.app/',
      status: 'Completed',
      featured: true
    },
    {
      id: 3,
      title: 'BD Govt Exam Photo & Signature Resizer',
      description: 'A tool for resizing photos and signatures for BD government exams.',
      image: 'https://raw.githubusercontent.com/bymshihab/photo-signature-resizer/5f60dc498a16e4b47b176e76f823979699536fbb/537807605_4182583988682952_1308281738531510381_n.jpg',
      tech: ['Angular', 'PWA'],
      technologies: ['Angular', 'PWA'],
      github: 'https://github.com/bymshihab/photo-signature-resizer',
      githubUrl: 'https://github.com/bymshihab/photo-signature-resizer',
      demo: 'https://photo-signature-resizer.vercel.app/',
      liveUrl: 'https://photo-signature-resizer.vercel.app/',
      status: 'Completed',
      featured: false
    },
    // {
    //   id: 4,
    //   title: 'Blog CMS Platform',
    //   description: 'A full-featured content management system for bloggers with rich text editor and SEO optimization.',
    //   image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Blog+CMS',
    //   tech: ['Angular', 'Express.js', 'PostgreSQL', 'TinyMCE'],
    //   technologies: ['Angular', 'Express.js', 'PostgreSQL', 'TinyMCE'],
    //   github: 'https://github.com/bymshihab/blog-cms',
    //   githubUrl: 'https://github.com/bymshihab/blog-cms',
    //   liveUrl: null,
    //   status: 'In Progress',
    //   featured: false
    // },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular featuring dark mode, responsive design, and smooth animations.',
      image: '/img/portfolio.png',
      tech: ['Angular', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
      technologies: ['Angular', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
      github: 'https://github.com/bymshihab/portfolio-shihab',
      githubUrl: 'https://github.com/bymshihab/portfolio-shihab',
      demo: 'https://portfolio-shihab-pjxc.vercel.app/',
      liveUrl: 'https://portfolio-shihab-pjxc.vercel.app/',
      status: 'Completed',
      featured: true
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      description: 'A scalable e-commerce platform with multi-vendor support, advanced search, and order tracking.',
      image: 'img/e-com.png',
      tech: ['Angular', 'Node.js', 'MySQL', 'Google Maps API'],
      technologies: ['Angular', 'Node.js', 'MySQL', 'Google Maps API'],
      github: '',
      githubUrl: '',
      liveUrl: null,
      status: 'In Progress',
      featured: false
    }
  ];

  filteredProjects = this.projects;
  selectedFilter = 'all';

  filterProjects(filter: string) {
    this.selectedFilter = filter;
    switch (filter) {
      case 'featured':
        this.filteredProjects = this.projects.filter(p => p.featured);
        break;
      case 'completed':
        this.filteredProjects = this.projects.filter(p => p.status === 'Completed');
        break;
      case 'in-progress':
        this.filteredProjects = this.projects.filter(p => p.status === 'In Progress');
        break;
      default:
        this.filteredProjects = this.projects;
    }
  }
}
