import { Injectable } from '@angular/core';
import { Fabricante } from '../models/fabricanteModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FabricanteService {
  baseUrl = 'http://localhost:3000/api/backend';

  constructor(private http: HttpClient) { }

  save(fabricante: Fabricante): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    return this.http.post(
      this.baseUrl + '/fabricante',
      JSON.stringify(fabricante),
      { headers: httpHeaders }
    );
  }

  // delete(id: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.delete(this.baseUrl + '/administrador/eliminar/' + id, {
  //     headers: httpHeaders,
  //   });
  // }

  // update(admin: Admin, id: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.put(
  //     this.baseUrl + '/administrador/actualizar/' + id,
  //     JSON.stringify(admin),
  //     { headers: httpHeaders }
  //   );
  // }

  // getId(id: number): Observable<any> {
  //   const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.get(this.baseUrl + '/administrador/buscarPorId/' + id, {
  //     headers: httpHeaders,
  //   });
  // }

  // getAdministradores(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.get(this.baseUrl + '/administrador/buscarAdministradores/', {
  //     headers: httpHeaders,
  //   });
  // }

  getAll(): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/fabricante/buscarFabricantes', {
      headers: httpHeaders,
    });
  }
}
