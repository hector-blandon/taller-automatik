import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from 'src/app/models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) {}

  save(cliente: ClienteModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + '/clientes', JSON.stringify(cliente), {
      headers: httpHeaders,
    });
  }

  delete(id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseUrl + '/clientes/eliminar/' + id, {
      headers: httpHeaders,
    });
  }

  update(cliente: ClienteModel, id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(
      this.baseUrl + '/clientes/actualizar/' + id,
      JSON.stringify(cliente),
      { headers: httpHeaders }
    );
  }

  getId(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/clientes/buscarPorId/' + id, {
      headers: httpHeaders,
    });
  }

  getAll(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/clientes/buscarPorTaller/' + idTaller,
      {
        headers: httpHeaders,
      }
    );
  }
}
