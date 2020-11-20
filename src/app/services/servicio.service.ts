import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicioModel } from '../models/servicio.model';
import { RepuestoUtilizado } from '../models/repuesto.model';
import { AccionRealizada } from '../models/accionR.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  baseUrl = 'http://localhost:3000/api/backend';
  constructor(private http: HttpClient) {}

  getId(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/servicios/buscarPorId/' + id, {
      headers: httpHeaders,
    });
  }

  getAllT(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/servicios/buscarPorTaller/' + idTaller,
      { headers: httpHeaders }
    );
  }

  getAllV(idVehiculo: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/servicios/buscarPorVehiculo/' + idVehiculo,
      { headers: httpHeaders }
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
    return this.http.put(this.baseUrl + '/servicios/archivar/' + id, {
      headers: httpHeaders,
    });
  }

  getAllM(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/mecanicos/buscarPorTaller/' + idTaller,
      {
        headers: httpHeaders,
      }
    );
  }

  getCliente(idCliente: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/clientes/buscarPorId/' + idCliente, {
      headers: httpHeaders,
    });
  }

  getVehiculo(idVehiculo: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/vehiculos/buscarPorId/' + idVehiculo,
      {
        headers: httpHeaders,
      }
    );
  }

  getAllRep(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/repuestos/buscarRepuestosPorIdServicio/' + id,
      {
        headers: httpHeaders,
      }
    );
  }

  saveRep(repuesto: RepuestoUtilizado): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/repuestos',
      JSON.stringify(repuesto),
      {
        headers: httpHeaders,
      }
    );
  }

  saveAcc(accion: AccionRealizada): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + '/acciones', JSON.stringify(accion), {
      headers: httpHeaders,
    });
  }

  getAllAcc(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/acciones/buscarAccionPorIdServicio/' + id,
      {
        headers: httpHeaders,
      }
    );
  }

  getAllPiezas(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(
      this.baseUrl + '/pieza/buscarPorTaller/' + idTaller,
      {}
    );
  }
}
