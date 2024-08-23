import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, FooterComponent],
  styleUrl: './app.component.css',
  //templateUrl: './app.component.html'
  template: `
    <nav>
      <router-outlet></router-outlet>
    </nav>
    
    
    
  `
  
})
export class AppComponent {
  title = 'Photo';
}
