import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//@ts-ignore
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  usersUrl = ".netlify/functions/users"


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any>(this.usersUrl)
  }
}
