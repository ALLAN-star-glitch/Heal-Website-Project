import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Explicitly type currentSection to match the keys of the images object
  currentSection: 'service1' | 'service2' | 'service3' = 'service1';
  currentImage = '/hero_image.jpg'; // Default image
  images: Record<'service1' | 'service2' | 'service3', string> = {
    service1: '/assets/healing_together.webp',
    service2: '/assets/hero.webp',
    service3: '/assets/hero_image.jpg',
  };

  constructor(private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const options = {
      root: null, // Viewport
      threshold: 0.6, // Trigger when 60% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as 'service1' | 'service2' | 'service3';
          this.currentSection = sectionId;
          this.currentImage = this.images[sectionId];
        }
      });
    }, options);

    // Observe each service group
    const sections = document.querySelectorAll('.service-group');
    sections.forEach((section) => observer.observe(section));
  }
}
