import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  imports: [RouterModule],
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  constructor(private router: Router) {}

  navigate(platform: string) {
    if (platform === 'instagram') {
      window.open('https://www.instagram.com', '_blank');
    } else if (platform === 'twitter') {
      window.open('https://www.twitter.com', '_blank');
    }
  }
}
