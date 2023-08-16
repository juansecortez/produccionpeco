import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-demoras-por-equipo',
  templateUrl: './demoras-por-equipo.component.html',
  styleUrls: ['./demoras-por-equipo.component.css'],
})
export class DemorasPorEquipoComponent implements OnInit {
  equipos: string[] = [];
  demoras: string[] = [];
  fechaSeleccionada = new FormControl(new Date().toISOString().slice(0, 10));
  equipoSeleccionado = new FormControl('');

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe((data) => {
      // Asegúrate de acceder al primer elemento del arreglo y luego a la propiedad EQUIPOS
      this.equipos = data[0].EQUIPOS.split(',');
    });
  }

  obtenerDemoras(): void {
    this.equipoService
      .getDemoras(this.fechaSeleccionada.value!, this.equipoSeleccionado.value!)
      .subscribe((data) => {
        if (data && data.length > 0 && data[0].DEMORAS) {
          let demorasStr = data[0].DEMORAS;
          this.demoras = demorasStr.split(',');
        } else {
          this.demoras = ['Este equipo no tiene demoras aún'];
        }
      });
  }
}
