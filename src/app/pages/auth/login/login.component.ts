import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/auth/home']); // Redirige a home tras iniciar sesión (ajusta según tu lógica)
    console.log('Login clicked');
  }
}
