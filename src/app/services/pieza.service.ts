import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiezaModel } from '../models/piezaModel';

@Injectable({
  providedIn: 'root',
})
export class PiezaService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) { }

  update(pieza: PiezaModel, id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(
      this.baseUrl + '/pieza/actualizar/' + id,
      JSON.stringify(pieza),
      { headers: httpHeaders }
    );
  }

  save(pieza: PiezaModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + '/pieza', JSON.stringify(pieza), {
      headers: httpHeaders,
    });
  }

  delete(id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseUrl + '/pieza/eliminar/' + id, {
      headers: httpHeaders,
    });
  }

  getId(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/pieza/buscarPorId/' + id, {
      headers: httpHeaders,
    });
  }

  getAll(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/pieza/buscarPorTaller/' + idTaller, {
    });
  }

  getPiezas(): Observable < any > {
      const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.get(this.baseUrl + '/pieza/buscarPiezas/', {
        headers: httpHeaders,
      });
    }
}
