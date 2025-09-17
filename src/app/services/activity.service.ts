import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, map, forkJoin } from 'rxjs';

export interface Activity {
  type: 'post' | 'article' | 'reaction' | 'achievement' | 'medium' | 'linkedin';
  title: string;
  content: string;
  timestamp: string;
  likes?: number | null;
  comments?: number | null;
  shares?: number | null;
  image?: string | null;
  url?: string;
  source?: 'medium' | 'linkedin' | 'manual';
}

export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  thumbnail?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  // Replace with your actual Medium username
  private readonly MEDIUM_USERNAME = 'khaledshihab221';
  private readonly MEDIUM_RSS_URL = `https://medium.com/feed/@${this.MEDIUM_USERNAME}`;

  // CORS proxy for RSS feeds (you can use your own or a public one)
  private readonly RSS_PROXY = 'https://api.allorigins.win/get?url=';

  constructor(private http: HttpClient) { }

  /**
   * Get all activities including manual ones, Medium articles, and LinkedIn posts
   */
  getAllActivities(): Observable<Activity[]> {
    const manualActivities = this.getManualActivities();
    const mediumActivities = this.getMediumArticles();

    return forkJoin({
      manual: of(manualActivities),
      medium: mediumActivities
    }).pipe(
      map(({ manual, medium }) => {
        const allActivities = [...manual, ...medium];
        // Sort by timestamp (newest first)
        return allActivities.sort((a, b) =>
          new Date(this.parseTimestamp(b.timestamp)).getTime() -
          new Date(this.parseTimestamp(a.timestamp)).getTime()
        );
      }),
      catchError(error => {
        console.error('Error fetching activities:', error);
        return of(manualActivities); // Fallback to manual activities
      })
    );
  }

  /**
   * Fetch Medium articles via RSS feed
   */
  getMediumArticles(): Observable<Activity[]> {
    const rssUrl = `${this.RSS_PROXY}${encodeURIComponent(this.MEDIUM_RSS_URL)}`;

    return this.http.get(rssUrl, { responseType: 'text' }).pipe(
      map((response: any) => {
        try {
          const data = JSON.parse(response);
          const xmlContent = data.contents;
          return this.parseMediumRSS(xmlContent);
        } catch (error) {
          console.error('Error parsing Medium RSS:', error);
          return [];
        }
      }),
      catchError(error => {
        console.error('Error fetching Medium articles:', error);
        return of([]);
      })
    );
  }

  /**
   * Parse Medium RSS XML content
   */
  private parseMediumRSS(xmlContent: string): Activity[] {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
      const items = xmlDoc.querySelectorAll('item');

      const activities: Activity[] = [];

      items.forEach((item, index) => {
        if (index < 5) { // Limit to 5 most recent articles
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';

          // Extract image from description if available
          const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
          const image = imageMatch ? imageMatch[1] : null;

          // Clean description from HTML tags
          const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 200) + '...';

          activities.push({
            type: 'article',
            title: `Published on Medium: ${title}`,
            content: cleanDescription,
            timestamp: this.formatTimestamp(pubDate),
            likes: null,
            comments: null,
            shares: null,
            image: image,
            url: link,
            source: 'medium'
          });
        }
      });

      return activities;
    } catch (error) {
      console.error('Error parsing RSS:', error);
      return [];
    }
  }

  /**
   * Get manual/static activities
   */
  private getManualActivities(): Activity[] {
    return [
      {
        type: 'post',
        title: 'Shared thoughts on Angular 17 new features',
        content: 'Excited about the new control flow syntax in Angular 17! The @if, @for, and @switch make templates much cleaner and more readable. 🚀',
        timestamp: '2 days ago',
        likes: 45,
        comments: 12,
        shares: 8,
        image: null,
        source: 'manual'
      },
      {
        type: 'achievement',
        title: 'Completed Angular Advanced Certification',
        content: 'Just earned the Angular Advanced Developer certification from Google. Ready to tackle more complex projects! 🎯',
        timestamp: '3 weeks ago',
        likes: 89,
        comments: 15,
        shares: 12,
        image: 'https://via.placeholder.com/150x150/059669/ffffff?text=CERT',
        source: 'manual'
      },
      {
        type: 'reaction',
        title: 'Liked a post by Satya Nadella',
        content: '"AI is transforming every industry. The key is to embrace it while maintaining human creativity and judgment."',
        timestamp: '2 weeks ago',
        likes: null,
        comments: null,
        shares: null,
        image: null,
        source: 'manual'
      }
    ];
  }

  /**
   * Format timestamp to relative time
   */
  private formatTimestamp(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  }

  /**
   * Parse timestamp for sorting
   */
  private parseTimestamp(timestamp: string): string {
    // Handle relative timestamps
    if (timestamp.includes('ago')) {
      const now = new Date();
      if (timestamp.includes('day')) {
        const days = parseInt(timestamp.match(/\d+/)?.[0] || '0');
        now.setDate(now.getDate() - days);
      } else if (timestamp.includes('week')) {
        const weeks = parseInt(timestamp.match(/\d+/)?.[0] || '0');
        now.setDate(now.getDate() - (weeks * 7));
      } else if (timestamp.includes('month')) {
        const months = parseInt(timestamp.match(/\d+/)?.[0] || '0');
        now.setMonth(now.getMonth() - months);
      }
      return now.toISOString();
    }

    // Handle absolute timestamps
    return new Date(timestamp).toISOString();
  }

  /**
   * LinkedIn integration placeholder
   * Note: LinkedIn API requires OAuth and has strict limitations
   * This is a placeholder for future implementation
   */
  getLinkedInActivities(): Observable<Activity[]> {
    // LinkedIn integration would require:
    // 1. LinkedIn API credentials
    // 2. OAuth flow implementation
    // 3. Proper permissions from LinkedIn

    // For now, return empty array
    return of([]);
  }

  /**
   * Refresh activities (useful for manual refresh)
   */
  refreshActivities(): Observable<Activity[]> {
    return this.getAllActivities();
  }
}
