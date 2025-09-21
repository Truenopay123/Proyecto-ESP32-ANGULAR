import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/auth/login']); // Redirige a home tras iniciar sesión (ajusta según tu lógica)
    console.log('Login clicked');
  }
}
