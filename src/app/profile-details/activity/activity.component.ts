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
  showAllActivities = false;
  readonly INITIAL_DISPLAY_COUNT = 5;

  constructor(private activityService: ActivityService) {}

  get displayedActivities(): Activity[] {
    if (this.showAllActivities) {
      return this.activities;
    }
    return this.activities.slice(0, this.INITIAL_DISPLAY_COUNT);
  }

  get shouldShowSeeMore(): boolean {
    return this.activities.length > this.INITIAL_DISPLAY_COUNT && !this.showAllActivities;
  }

  get shouldShowSeeLess(): boolean {
    return this.activities.length > this.INITIAL_DISPLAY_COUNT && this.showAllActivities;
  }

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
    this.showAllActivities = false; // Reset to initial state when refreshing
    this.loadActivities();
  }

  toggleShowAll() {
    this.showAllActivities = !this.showAllActivities;
  }  openActivity(activity: Activity) {
    if (activity.url) {
      window.open(activity.url, '_blank');
    }
  }
}
