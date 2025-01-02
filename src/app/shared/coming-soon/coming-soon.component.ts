import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'

})
export class ComingSoonComponent {

  pageTitle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the page title from route data
    this.route.data.subscribe((data) => {
      this.pageTitle = data['title'] || 'Page';
    });
  }

}
