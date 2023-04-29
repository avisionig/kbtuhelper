import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {AuthToken} from "./token";
import {User} from "./data/User";



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {
  }
  BASE_URL = "http://127.0.0.1:8000";

  login(email: string, password: string) : Observable<AuthToken>{
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login`, {email, password});
  }
  logout(){
    localStorage.removeItem('token');
  }
  register(user: User){
    return this.client.post(`${this.BASE_URL}/api/register`, user);
  }
}
