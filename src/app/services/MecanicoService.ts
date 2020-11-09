import { Injectable } from '@angular/core';
import { MecanicoModel } from '../models/MecanicoModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MecanicoService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) { }

  save(mecanico: MecanicoModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/mecanicos',
      JSON.stringify(mecanico),
      { headers: httpHeaders }
    );
  }

  delete(id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseUrl + '/mecanicos/eliminar/' + id, {
      headers: httpHeaders,
    });
  }

  update(mecanico: MecanicoModel, id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(
      this.baseUrl + '/mecanicos/actualizar/' + id,
      JSON.stringify(mecanico),
      { headers: httpHeaders }
    );
  }

  getId(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/mecanicos/buscarPorId/' + id, {
      headers: httpHeaders,
    });
  }

  getAll(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/mecanicos/buscarPorTaller/' + idTaller,
      {
        headers: httpHeaders,
      }
    );
  }

  getMecanicos(): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/mecanicos/buscarMecanicos/', {
      headers: httpHeaders,
    });

  }
}
