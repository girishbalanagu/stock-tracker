import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelloService {
  url = ".netlify/functions/hello"
  usersUrl = ".netlify/functions/users"

  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get<any>(this.url);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any>(this.usersUrl)
  }
}
