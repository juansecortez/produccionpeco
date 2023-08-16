import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductionService {
  private readonly apiUrl =
    'http://201.144.18.40:8080//wsAutEmp/Service1.asmx/ProduccionTurno?fecha=';

  constructor(private http: HttpClient) {}

  getProductionData(date: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${date}`);
  }
}
