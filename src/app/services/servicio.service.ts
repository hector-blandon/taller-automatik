import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicioModel } from '../models/servicio.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) {}

  getAllT(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/servicios/buscarPorTaller/' + idTaller,
      {}
    );
  }

  getAllV(idVehiculo: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/servicios/buscarPorVehiculo/' + idVehiculo,
      {}
    );
  }

  save(servicio: ServicioModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/servicios',
      JSON.stringify(servicio),
      {
        headers: httpHeaders,
      }
    );
  }

  update(servicio: ServicioModel, id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(
      this.baseUrl + '/servicios/actualizar/' + id,
      JSON.stringify(servicio),
      { headers: httpHeaders }
    );
  }

  archive(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseUrl + '/servicios/archivar/' + id, {});
  }
}
