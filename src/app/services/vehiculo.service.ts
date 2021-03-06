import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) { }

  save(vehiculo: Vehiculo): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/vehiculos',
      JSON.stringify(vehiculo),
      {
        headers: httpHeaders,
      }
    );
  }

  delete(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseUrl + '/vehiculos/eliminar/' + id, {
      headers: httpHeaders,
    });
  }

  getAll(idCliente: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/vehiculos/buscarPorCliente/' + idCliente,
      {
        headers: httpHeaders,
      }
    );
  }

  getVehiculos(): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/vehiculos/buscarVehiculos/', {
      headers: httpHeaders,
    });
  }
}
