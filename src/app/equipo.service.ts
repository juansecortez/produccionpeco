import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  private baseUrl = 'http://201.144.18.40:8080/wsAutEmp/Service1.asmx/';

  constructor(private http: HttpClient) {}

  getEquipos(): Observable<any> {
    return this.http.get(this.baseUrl + 'EQUIPOSDEMORAS');
  }

  getDemoras(fecha: string, equipo: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `DEMORASDEMORAS?FECHA=${fecha}&EQUIPO=${equipo}`
    );
  }
}
