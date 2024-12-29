import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { TopHeaderComponent } from "./top-header/top-header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, MainHeaderComponent, TopHeaderComponent, FooterComponent],
  template: `
    <main class="app-container">
      <app-top-header/>
      <app-main-header></app-main-header> <!-- Include MainHeaderComponent -->
      <section class="content">
        <router-outlet></router-outlet>
      </section>

       <!--footer component -->
      <app-footer></app-footer>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'HEAL Project';
}
