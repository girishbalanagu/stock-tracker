import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  url = ".netlify/functions/hello"

  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get<any>(this.url);
  }

}
