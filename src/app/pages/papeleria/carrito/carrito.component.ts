import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [CommonModule, ButtonModule, RouterModule]
})
export class CarritoComponent {
  navigate(destination: string) {
    console.log(`Navigating to ${destination}`);
  }

  logout() {
    console.log('Logging out');
  }

  cartItems = [
    { name: 'Cuadernos espiral', price: 30, quantity: 1, image: 'assets/cuaderno_espiral.jpg' },
    { name: 'Paquete de PRITT', price: 79.50, quantity: 3, image: 'assets/pritt.jpg' },
    { name: 'Tijeras Raugcci', price: 289.75, quantity: 1, image: 'assets/tijera_raugucci.jpg' },
    { name: 'Plumas de colores', price: 300, quantity: 2, image: 'assets/plumas_colores.jpg' }
  ];

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get total(): number {
    return this.subtotal;
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}
