import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pieza } from '../models/piezaModel';

@Injectable({
  providedIn: 'root',
})
export class PiezaService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  actualizarPieza(pieza: Pieza): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/pieza/actualizar/', JSON.stringify(pieza), {
      headers,
    });
  }
}
