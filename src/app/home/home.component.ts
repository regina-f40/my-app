import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-main-page></app-main-page>  
    <div class="home">
      <h1>Bienvenidos</h1>
      <p>Descubra nuestros servicios y nuestro trabajo.</p>
    </div>
   <div class="foto-home">
      <img src="assets/photo00033.JPG" class='foto-home-1'/>
   </div>
    
  `,
    styleUrl: './home.component.css',
    imports: [MainPageComponent]
})
export class HomeComponent {

}
