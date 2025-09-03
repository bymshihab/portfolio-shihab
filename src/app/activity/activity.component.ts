import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  activities = [
    {
      type: 'post',
      title: 'Shared thoughts on Angular 17 new features',
      content: 'Excited about the new control flow syntax in Angular 17! The @if, @for, and @switch make templates much cleaner and more readable. 🚀',
      timestamp: '2 days ago',
      likes: 45,
      comments: 12,
      shares: 8,
      image: null
    },
    {
      type: 'article',
      title: 'Published an article: "Modern Angular Development Best Practices"',
      content: 'Sharing my insights on building scalable Angular applications with the latest patterns and techniques.',
      timestamp: '1 week ago',
      likes: 128,
      comments: 23,
      shares: 35,
      image: 'https://via.placeholder.com/400x200/1e40af/ffffff?text=Angular+Article'
    },
    {
      type: 'reaction',
      title: 'Liked a post by Satya Nadella',
      content: '"AI is transforming every industry. The key is to embrace it while maintaining human creativity and judgment."',
      timestamp: '2 weeks ago',
      likes: null,
      comments: null,
      shares: null,
      image: null
    },
    {
      type: 'achievement',
      title: 'Completed Angular Advanced Certification',
      content: 'Just earned the Angular Advanced Developer certification from Google. Ready to tackle more complex projects! 🎯',
      timestamp: '3 weeks ago',
      likes: 89,
      comments: 15,
      shares: 12,
      image: 'https://via.placeholder.com/150x150/059669/ffffff?text=CERT'
    }
  ];
}
