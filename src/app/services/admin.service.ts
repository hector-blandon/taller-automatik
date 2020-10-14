import { Injectable } from '@angular/core';
import { Admin } from '../models/adminModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }


  saveA(admin: Admin): Observable<any>{
    return this.http.post(this.baseUrl + '/administrador', admin);
  }
}
