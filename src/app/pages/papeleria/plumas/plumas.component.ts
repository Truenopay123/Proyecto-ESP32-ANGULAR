import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plumas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './plumas.component.html',
  styleUrl: './plumas.component.css'
})
export class PlumasComponent {
  navigate(destination: string) {
    console.log(`Navigating to ${destination}`);
    // Add your routing logic here, e.g., using Angular Router
    // Example: this.router.navigate([`/${destination}`]);
  }

  logout() {
    console.log('Logging out');
    // Add your logout logic here
  }

}
