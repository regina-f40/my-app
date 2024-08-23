import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {
  constructor(private router: Router) {}

  goToHome() {
    setTimeout(() => {
    this.router.navigate(['/home']);
  }, 3000);
}

}
