import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  template: ` 
  <mat-toolbar class="footer-toolbar">
    <span>&copy;Made by <a href="https://www.linkedin.com/in/regina-fayzullina">Regina</a></span>
    <span>&copy; PR_Photo</span>
  </mat-toolbar>
`,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
