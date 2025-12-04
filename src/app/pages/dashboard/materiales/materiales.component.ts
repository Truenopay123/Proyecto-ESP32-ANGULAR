// Updated materiales.component.ts (frontend/src/app/pages/materiales/materiales.component.ts)
// Added HttpClient to fetch real data from backend
// Update temp/hum/lastUpdate with latest record
// Added line chart for historical temp/hum (last 10 records)
// Assumes PrimeNG ChartModule is installed and imported
// Other fields remain static as they are not in the DB

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, ChartModule],
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  // ==================== DATOS DINÁMICOS ====================
  temperature: number = 0;
  humidity: number = 0;
  lastUpdate: number = 0;
  chartData: any;
  chartOptions: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    };
  }

  loadData() {
    this.http.get<any[]>('https://telemetry-gamma.vercel.app/api/telemetry').subscribe(data => {
      if (data.length > 0) {
        // Latest data for cards
        const latest = data[0];
        this.temperature = latest.temp;
        this.humidity = latest.hum;

        const now = new Date();
        const lastTime = new Date(latest.timestamp_utc);
        this.lastUpdate = Math.floor((now.getTime() - lastTime.getTime()) / 1000);

        // Historical chart (last 10, reversed to show oldest first)
        const recent = data.slice(0, 10).reverse();
        this.chartData = {
          labels: recent.map(d => d.timestamp_local),
          datasets: [
            {
              label: 'Temperatura (°C)',
              data: recent.map(d => d.temp),
              borderColor: 'red',
              fill: false
            },
            {
              label: 'Humedad (%)',
              data: recent.map(d => d.hum),
              borderColor: 'blue',
              fill: false
            }
          ]
        };
      }
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  // Métodos existentes
  navigate(destination: string) {
    console.log(`Navegando a ${destination}`);
  }

  refreshData() {
    console.log('Refrescando datos...');
    this.loadData();  // Recargar datos reales
  }
}
