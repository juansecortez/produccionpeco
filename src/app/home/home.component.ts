import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../movimiento.service'; // Asegúrate de actualizar la ruta si es necesario

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  today: string;
  yesterday: string;
  currentMonth: string;
  currentYear: string;
  movimientos: any; // Aquí almacenaremos los datos de la API

  constructor(private movimientoService: MovimientoService) {
    this.today = new Date().toLocaleDateString();
    this.yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toLocaleDateString();
    this.currentMonth = new Date().toLocaleString('default', { month: 'long' });
    this.currentYear = new Date().getFullYear().toString();
  }

  ngOnInit() {
    this.movimientoService.getMovimientos().subscribe((data) => {
      this.movimientos = data[0]; // Asume que la respuesta es un array y toma el primer elemento
    });
  }
}
