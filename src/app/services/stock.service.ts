import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stockModel';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  url = 'http://localhost:3001/api';
  constructor(private http: HttpClient) {}

  saveStock(stock: Stock): Observable<any> {
    return this.http.post(this.url, stock);
  }
}
