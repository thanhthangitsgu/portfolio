import type { ProjectModel } from '@/shared/project-model.ts'


export const projects: ProjectModel[] = [
  {
    name: 'Personal Portfolio',
    description: 'A personal project designed to introduce basic information about myself, including details about my products and contact information.',
    tag: ['Multiple Language', 'Web', 'VueJs', 'Tailwind'],
    image: 'personal-portfolio.png'
  },

  {
    name: 'Giang Suong Component',
    description: 'A landing page for a business specializing in electronic accessories. It allows customers to view product information, contact for orders, and sign up for a trial by filling out a form',
    tag: ['Web', 'Landing Page', 'React'],
    image: 'giang-suong.png'
  }
]
