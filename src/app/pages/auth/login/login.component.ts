// Updated login.component.ts (frontend/src/app/auth/login/login.component.ts)
// Added hardcoded users and onSubmit() for simple auth check

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private users = [
    { email: 'admin@example.com', password: 'admin123' },
    { email: 'user@example.com', password: 'user123' }
  ];

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login clicked');
  }

  onSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      // Simple "auth" - in a real app, use JWT or similar
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/papeleria/materiales']);
    } else {
      alert('Credenciales inválidas. Usa: admin@example.com / admin123 o user@example.com / user123');
    }
  }
}
