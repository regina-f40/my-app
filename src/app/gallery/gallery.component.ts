import { Component } from '@angular/core';
import { MainPageComponent } from "../main-page/main-page.component";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery',
    standalone: true,
    template: `
    <app-main-page></app-main-page> 
    <div class="portfolio-container">
        <div class="portfolio-grid">
            <mat-card *ngFor="let photo of photos" class="portfolio-card">
            <img mat-card-image [src]="photo.url" [alt]="photo.title">
            <mat-card-content>
             <h3>{{ photo.title }}</h3>
            </mat-card-content>
            </mat-card>
        </div>
    </div>
    
    `,
    styleUrl: './gallery.component.css',
    imports: [MainPageComponent, MatCardModule, CommonModule]
})
export class GalleryComponent {
    photos = [
        { url: 'assets/photo00001.jpg', title: 'Foto 1' },
        { url: 'assets/photo00002.JPG', title: 'Foto 2' },
        { url: 'assets/photo00003.jpg', title: 'Foto 3' },
        { url: 'assets/photo00004.jpg', title: 'Foto 4' },
        { url: 'assets/photo00005.jpg', title: 'Foto 5' },
        { url: 'assets/photo00006.jpg', title: 'Foto 6' },
        { url: 'assets/photo00007.jpg', title: 'Foto 7' },
        { url: 'assets/photo00008.jpg', title: 'Foto 8' },
        { url: 'assets/photo00009.jpg', title: 'Foto 9' },
        { url: 'assets/photo00010.jpg', title: 'Foto 10' },
        { url: 'assets/photo00011.jpg', title: 'Foto 11' },
        { url: 'assets/photo00012.jpg', title: 'Foto 12' },
    ]

}
