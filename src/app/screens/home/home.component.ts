import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatCardModule, NgbProgressbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
