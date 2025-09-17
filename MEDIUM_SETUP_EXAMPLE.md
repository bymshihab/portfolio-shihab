// Example usage with real Medium username
// Replace 'your-medium-username' with actual username like 'shihab-dev' or 'john-doe'

export class ActivityService {
  // Example configuration for different users:
  
  // For Medium user 'freeCodeCamp':
  // private readonly MEDIUM_USERNAME = 'freecodecamp';
  
  // For Medium user 'javascript-scene':
  // private readonly MEDIUM_USERNAME = 'javascript-scene';
  
  // For your Medium profile, replace with your actual username:
  private readonly MEDIUM_USERNAME = 'your-actual-medium-username-here';
  
  // Alternative CORS proxies you can use:
  // private readonly RSS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  // private readonly RSS_PROXY = 'https://api.codetabs.com/v1/proxy?quest=';
  // private readonly RSS_PROXY = 'https://api.allorigins.win/get?url=';
  
  // For testing purposes, you can use a public Medium RSS feed:
  testWithPublicFeed() {
    const testUrl = 'https://medium.com/feed/@freecodecamp';
    console.log('Testing with:', testUrl);
    // This will help you verify the RSS parsing works
  }
}

// Quick test function you can use in browser console:
/*
// After opening your portfolio, run this in browser console:
fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://medium.com/feed/@freecodecamp'))
  .then(response => response.json())
  .then(data => {
    console.log('RSS Response:', data);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
    console.log('Parsed XML:', xmlDoc);
    const items = xmlDoc.querySelectorAll('item');
    console.log('Found articles:', items.length);
  })
  .catch(error => console.error('Error:', error));
*/
