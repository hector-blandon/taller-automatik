import { Injectable } from '@angular/core';
import { MecanicoModel } from '../models/MecanicoModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  baseUrl: string = "http://localhost:3000/api/backend";
  constructor(private http: HttpClient) { }


  save(mecanico: MecanicoModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/mecanicos", JSON.stringify(mecanico), { headers: httpHeaders });
  }
}
