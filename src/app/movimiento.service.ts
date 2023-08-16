import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovimientoService {
  private apiUrl =
    'http://201.144.18.40:8080/wsproduccion/ProduccionPeco.asmx/ProduccionRealTime';

  constructor(private http: HttpClient) {}

  getMovimientos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
