import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ButtonModule, RouterModule, InputTextModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardNumber: string = '';
  cvc: string = '';
  expiry: string = '';
  name: string = '';
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted:', { cardNumber: this.cardNumber, cvc: this.cvc, expiry: this.expiry, name: this.name, email: this.email });
  }

  navigate(platform: string) {
    // Add navigation logic for social media
    console.log(`Navigating to ${platform}`);
    // Example: window.open(`https://${platform}.com`, '_blank');
  }
}
