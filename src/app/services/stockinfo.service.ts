import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockinfoService {
  url = ".netlify/functions/stockinfo"

  constructor(private http: HttpClient) { }

  getStockinfo() {
    return this.http.get<any>(this.url); 
  }
}
