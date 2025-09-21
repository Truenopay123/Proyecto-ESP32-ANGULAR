import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterModule], // Agrega RouterModule aquí
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/auth/login']);
    console.log('Login clicked');
  }
}
