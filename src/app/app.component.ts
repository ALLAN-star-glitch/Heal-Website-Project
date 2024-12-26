import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { TopHeaderComponent } from "./top-header/top-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, MainHeaderComponent, TopHeaderComponent],
  template: `
    <main>
      <app-top-header/>
      <app-main-header></app-main-header> <!-- Include MainHeaderComponent -->
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'HEAL Project';
}
