import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

}
