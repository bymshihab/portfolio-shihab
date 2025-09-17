import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService, Activity } from '../../services/activity.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];
  loading = true;
  error: string | null = null;

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.loading = true;
    this.error = null;

    this.activityService.getAllActivities().subscribe({
      next: (activities) => {
        this.activities = activities;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading activities:', error);
        this.error = 'Failed to load activities. Please try again later.';
        this.loading = false;
        // Fallback to empty array
        this.activities = [];
      }
    });
  }

  refreshActivities() {
    this.loadActivities();
  }

  openActivity(activity: Activity) {
    if (activity.url) {
      window.open(activity.url, '_blank');
    }
  }
}
