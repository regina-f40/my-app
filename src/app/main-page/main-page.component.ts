import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, FooterComponent, MatToolbarModule],
  template: `

    <mat-toolbar class="main-toolbar">
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/gallery">Gallery</a>
      <a routerLink="/contact">Contact</a>
    </mat-toolbar>
    <app-footer></app-footer>
    `,
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
