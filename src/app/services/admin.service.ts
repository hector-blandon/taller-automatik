import { Injectable } from '@angular/core';
import { Admin } from '../models/adminModel';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl: string = "http://localhost:3000/api/backend";
  constructor(private http: HttpClient) { }


  saveA(admin: Admin): Observable<any>{  
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/administrador", JSON.stringify(admin), { headers: httpHeaders });
  }
  login(credenciales : any): Observable<any>{  
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + "/login", JSON.stringify(credenciales), { headers: httpHeaders });
  }
}
