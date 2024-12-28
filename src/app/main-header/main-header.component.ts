import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    CommonModule,       // For basic Angular functionality
    MatToolbarModule,   // For Angular Material Toolbar
    MatButtonModule,    // For Angular Material Buttons
    MatIconModule,      // For Angular Material Icons (optional)
    RouterModule        // Import RouterModule to use routerLink
  ],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  // Any necessary component logic can go here

  toggleNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler?.classList.toggle('active');
  }
}
