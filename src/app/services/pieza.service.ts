import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiezaModel } from '../models/piezaModel';

@Injectable({
  providedIn: 'root',
})
export class PiezaService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) {}

  actualizarPieza(pieza: PiezaModel): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/pieza/actualizar/', JSON.stringify(pieza), {
      headers
    });
  }

  save(pieza: PiezaModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/pieza", JSON.stringify(pieza), { headers: httpHeaders });
  }
}
