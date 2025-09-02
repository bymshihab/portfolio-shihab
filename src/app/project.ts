export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce App",
    description: "Angular 19, Tailwind, SSR, Signal-based state management",
    tech: ["Angular 19", "SSR", "Signals", "Tailwind"],
    github: "https://github.com/username/ecommerce-app",
    demo: "https://ecommerce-app-demo.com",
    image: "assets/images/ecommerce.png"
  },
  {
    title: "Task Manager",
    description: "Angular PWA with CRUD operations and responsive design",
    tech: ["Angular", "TypeScript", "PWA", "Material"],
    github: "https://github.com/username/task-manager",
    image: "assets/images/taskmanager.png"
  }
];
