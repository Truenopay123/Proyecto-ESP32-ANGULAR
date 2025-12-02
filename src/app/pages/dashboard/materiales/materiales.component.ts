// materiales.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {

  // ==================== DATOS ESTÁTICOS (se ven reales) ====================
  temperature = 26.4;
  humidity = 58;
  relayState = true;
  voltage = 3.89;
  batteryPercent = 82;
  uptime = '1d 08h 24m';
  isOnline = true;
  deviceIP = '192.168.1.137';
  lastUpdate = 2;

  // ======================================================================

  // Métodos vacíos solo para que el HTML no dé error al hacer click
  navigate(destination: string) {
    console.log(`Navegando a ${destination}`);
  }

  refreshData() {
    console.log('Refrescando datos...');
    // Simulamos una pequeña actualización visual
    this.lastUpdate = 0;
    setTimeout(() => {
      this.temperature = 26.7;
      this.humidity = 57;
      this.voltage = 3.91;
      this.batteryPercent = 84;
      this.lastUpdate = 1;
    }, 800);
  }

  toggleRelay() {
    this.relayState = !this.relayState;
    console.log('Relé/LED cambiado a:', this.relayState ? 'ENCENDIDO' : 'APAGADO');
  }
}
