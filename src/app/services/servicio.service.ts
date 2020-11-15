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

  getAll(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/servicio/buscarPorTaller/' + idTaller,
      {}
    );
  }

  save(servicio: ServicioModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/servicio',
      JSON.stringify(servicio),
      {
        headers: httpHeaders,
      }
    );
  }
}
