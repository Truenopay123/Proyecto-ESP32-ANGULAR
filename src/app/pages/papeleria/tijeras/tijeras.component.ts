import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tijeras',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tijeras.component.html',
  styleUrl: './tijeras.component.css'
})
export class TijerasComponent {
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
