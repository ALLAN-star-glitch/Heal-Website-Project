import { Component } from '@angular/core'; // Core Angular module for creating components
import { RouterModule } from '@angular/router'; // Module for navigation and routing
import { MatCardModule } from '@angular/material/card'; // Angular Material module for cards
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Module for modal dialog handling
import { CommonModule } from '@angular/common'; // Common Angular directives and pipes
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Module for sanitizing URLs for safe usage

@Component({
  selector: 'app-home', // Selector for this component
  imports: [RouterModule, MatCardModule, CommonModule], // Imported modules used by the component
  templateUrl: './home.component.html', // Path to the component's HTML template
  styleUrls: ['./home.component.scss'], // Path to the component's stylesheet
})
export class HomeComponent {
  // Stores the currently visible section's ID (either 'service1' or 'service2')
  currentSection: 'service1' | 'service2' = 'service1';

  // Holds the URL of the currently displayed YouTube video
  currentVideo = ' '; 

  // A map linking each section to its respective YouTube video URL
  videos: Record<'service1' | 'service2', string> = {
    service1: 'https://www.youtube.com/embed/NcCdoOkWPI0?autoplay=1&mute=1&loop=1&playlist=NcCdoOkWPI0&si=A9g4Hegem-pa1sI2', // Video for service1
    service2: 'https://www.youtube.com/embed/SmbIcdJ0Zx8?autoplay=1&mute=1&loop=1&playlist=SmbIcdJ0Zx8' // Video for service2
  };

  // Constructor to inject NgbModal for modals and DomSanitizer for URL sanitization
  constructor(private modalService: NgbModal, private sanitizer: DomSanitizer) {}

  // Opens a modal dialog with specified content
  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  // Angular lifecycle hook called once the component is initialized
  ngOnInit() {
    this.setupIntersectionObserver(); // Sets up IntersectionObserver for video updates
  }

  // Sets up IntersectionObserver to track visibility of elements with 'service-group' class
  setupIntersectionObserver() {
    const options = {
      root: null, // Root is the viewport
      threshold: 0.4, // Trigger when 60% of an element is visible
    };

    // Observer callback to update the current section and video
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as 'service1' | 'service2'; // Cast ID to section type
          this.currentSection = sectionId; // Update current section
          this.currentVideo = this.videos[sectionId]; // Update the video URL
        }
      });
    }, options);

    // Select all sections with the 'service-group' class and observe them
    const sections = document.querySelectorAll('.service-group');
    sections.forEach((section) => observer.observe(section));
  }

  // Sanitizes a YouTube URL to make it safe for use in an iframe
  getSanitizedVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Return the button label based on the current section
  getButtonLabel(): string {
    return this.currentSection === 'service1' 
      ? 'Find a Counselor' 
      : 'Join as a Counselor';
  }

  // Handle button click based on the current section
  handleButtonClick() {
    if (this.currentSection === 'service1') {
      alert('Redirecting to Counseling Services...');
      // Add navigation or action logic for "service1"
    } else if (this.currentSection === 'service2') {
      alert('Redirecting to Join as a Counselor...');
      // Add navigation or action logic for "service2"
    }
  }
}
