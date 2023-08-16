import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../production.service';

@Component({
  selector: 'app-production-by-turn',
  templateUrl: './production-by-turn.component.html',
  styleUrls: ['./production-by-turn.component.css'],
})
export class ProductionByTurnComponent implements OnInit {
  selectedDate: string;
  T1MOVT: string = '';
  T1MINERAL: string = '';
  T1ESTOPE: string = '';
  T1ESTPRE: string = '';
  T1OTOMOV: string = '';
  T1L5025: string = '';
  T1L5027: string = '';
  T1L5028: string = '';
  T1P5029: string = '';
  T1P5030: string = '';
  T2MOVT: string = '';
  T2MINERAL: string = '';
  T2ESTOPE: string = '';
  T2ESTPRE: string = '';
  T2OTOMOV: string = '';
  T2L5025: string = '';
  T2L5027: string = '';
  T2L5028: string = '';
  T2P5029: string = '';
  T2P5030: string = '';
  T3MOVT: string = '';
  T3MINERAL: string = '';
  T3ESTOPE: string = '';
  T3ESTPRE: string = '';
  T3OTOMOV: string = '';
  T3L5025: string = '';
  T3L5027: string = '';
  T3L5028: string = '';
  T3P5029: string = '';
  T3P5030: string = '';
  T4MOVT: string = '';
  T4MINERAL: string = '';
  T4ESTOPE: string = '';
  T4ESTPRE: string = '';
  T4OTOMOV: string = '';
  T4L5025: string = '';
  T4L5027: string = '';
  T4L5028: string = '';
  T4P5029: string = '';
  T4P5030: string = '';
  T1P5031: string = '';
  T2P5031: string = '';
  T3P5031: string = '';
  T4P5031: string = '';
  T1LEMD: string = '';
  T2LEMD: string = '';
  T3LEMD: string = '';
  T4LEMD: string = '';

  constructor(private productionService: ProductionService) {
    this.selectedDate = this.formatDate(new Date());
  }

  ngOnInit(): void {
    this.getProductionData();
  }

  getProductionData(): void {
    this.productionService
      .getProductionData(this.selectedDate)
      .subscribe((data) => {
        const production = data[0];
        this.T1MOVT = production.T1MOVT;
        this.T1MINERAL = production.T1MINERAL;
        this.T1ESTOPE = production.T1ESTOPE;
        this.T1ESTPRE = production.T1ESTPRE;
        this.T1OTOMOV = production.T1OTOMOV;
        this.T1L5025 = production.T1L5025;
        this.T1L5027 = production.T1L5027;
        this.T1L5028 = production.T1L5028;
        this.T1P5029 = production.T1P5029;
        this.T1P5030 = production.T1P5030;
        this.T2MOVT = production.T2MOVT;
        this.T2MINERAL = production.T2MINERAL;
        this.T2ESTOPE = production.T2ESTOPE;
        this.T2ESTPRE = production.T2ESTPRE;
        this.T2OTOMOV = production.T2OTOMOV;
        this.T2L5025 = production.T2L5025;
        this.T2L5027 = production.T2L5027;
        this.T2L5028 = production.T2L5028;
        this.T2P5029 = production.T2P5029;
        this.T2P5030 = production.T2P5030;
        this.T3MOVT = production.T3MOVT;
        this.T3MINERAL = production.T3MINERAL;
        this.T3ESTOPE = production.T3ESTOPE;
        this.T3ESTPRE = production.T3ESTPRE;
        this.T3OTOMOV = production.T3OTOMOV;
        this.T3L5025 = production.T3L5025;
        this.T3L5027 = production.T3L5027;
        this.T3L5028 = production.T3L5028;
        this.T3P5029 = production.T3P5029;
        this.T3P5030 = production.T3P5030;
        this.T4MOVT = production.T4MOVT;
        this.T4MINERAL = production.T4MINERAL;
        this.T4ESTOPE = production.T4ESTOPE;
        this.T4ESTPRE = production.T4ESTPRE;
        this.T4OTOMOV = production.T4OTOMOV;
        this.T4L5025 = production.T4L5025;
        this.T4L5027 = production.T4L5027;
        this.T4L5028 = production.T4L5028;
        this.T4P5029 = production.T4P5029;
        this.T4P5030 = production.T4P5030;
        this.T1P5031 = production.T1P5031;
        this.T2P5031 = production.T2P5031;
        this.T3P5031 = production.T3P5031;
        this.T4P5031 = production.T4P5031;
        this.T1LEMD = production.T1LEMD;
        this.T2LEMD = production.T2LEMD;
        this.T3LEMD = production.T3LEMD;
        this.T4LEMD = production.T4LEMD;
      });
  }

  formatDate(date: Date): string {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  onDateChange(event: any): void {
    let selectedDate = new Date(event.target.value);
    this.selectedDate = this.formatDate(selectedDate);
    this.getProductionData();
  }
}
