import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  baseUrl:string = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) { }


  saveA(vehiculo: Vehiculo): Observable<any>{
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + '/vehiculo', JSON.stringify(vehiculo), { headers: httpHeaders });
  }
}
