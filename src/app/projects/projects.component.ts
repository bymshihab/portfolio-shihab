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
      title: 'E-Commerce Angular App',
      description: 'A modern e-commerce platform built with Angular 17, featuring user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=E-Commerce+App',
      tech: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/bymshihab/ecommerce-angular',
      githubUrl: 'https://github.com/bymshihab/ecommerce-angular',
      demo: 'https://ecommerce-demo.vercel.app',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management system with real-time updates, team collaboration, and advanced analytics.',
      image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Task+Manager',
      tech: ['Angular', 'Firebase', 'Material UI', 'Chart.js'],
      technologies: ['Angular', 'Firebase', 'Material UI', 'Chart.js'],
      github: 'https://github.com/bymshihab/task-manager',
      githubUrl: 'https://github.com/bymshihab/task-manager',
      demo: 'https://taskmanager-demo.vercel.app',
      liveUrl: 'https://taskmanager-demo.vercel.app',
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
    {
      id: 4,
      title: 'Blog CMS Platform',
      description: 'A full-featured content management system for bloggers with rich text editor and SEO optimization.',
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Blog+CMS',
      tech: ['Angular', 'Express.js', 'PostgreSQL', 'TinyMCE'],
      technologies: ['Angular', 'Express.js', 'PostgreSQL', 'TinyMCE'],
      github: 'https://github.com/bymshihab/blog-cms',
      githubUrl: 'https://github.com/bymshihab/blog-cms',
      liveUrl: null,
      status: 'In Progress',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular featuring dark mode, responsive design, and smooth animations.',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Portfolio',
      tech: ['Angular', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
      technologies: ['Angular', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
      github: 'https://github.com/bymshihab/portfolio-shihab',
      githubUrl: 'https://github.com/bymshihab/portfolio-shihab',
      demo: 'https://shihab-portfolio.vercel.app',
      liveUrl: 'https://shihab-portfolio.vercel.app',
      status: 'Completed',
      featured: true
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'A property listing platform with advanced search filters, virtual tours, and agent management system.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Real+Estate',
      tech: ['Angular', 'Node.js', 'MySQL', 'Google Maps API'],
      technologies: ['Angular', 'Node.js', 'MySQL', 'Google Maps API'],
      github: 'https://github.com/bymshihab/real-estate',
      githubUrl: 'https://github.com/bymshihab/real-estate',
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
