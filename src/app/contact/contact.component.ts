import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/khaled-jubair/',
      icon: 'linkedin',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bymshihab',
      icon: 'github',
      color: 'text-gray-800 dark:text-gray-200 hover:text-gray-600'
    },
    {
      name: 'Email',
      url: 'mailto:khaledshihab221@gmail.com',
      icon: 'email',
      color: 'text-red-600 hover:text-red-700'
    },
    {
      name: 'Phone',
      url: 'tel:+8801990637762',
      icon: 'phone',
      color: 'text-green-600 hover:text-green-700'
    }
  ];

   onSubmit() {
    const serviceID = 'service_tp2ityr';
    const templateID = 'template_8vf6frq';
    const publicKey = 'cLWZcAPVtH4pQ6fto';

    emailjs.send(serviceID, templateID, this.contactForm, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I\'ll get back to you soon.');

        // Reset form
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, (err) => {
        console.error('FAILED...', err);
        alert('Oops! Something went wrong. Please try again later.');
      });
  }
}
