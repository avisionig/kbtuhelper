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

  getUser():Observable<User>{

    return this.client.get<User>(`${this.BASE_URL}/users/login/`);
  }
  enterToOrg(id:number, org:number):Observable<User>{
    return this.client.put<User>(`${this.BASE_URL}/users/${id}/`, {'organization':org});
  }
  updateFaculty(id:number, faculty:string):Observable<User>{
    return this.client.put<User>(`${this.BASE_URL}/users/${id}/`, {'faculty':faculty});
  }
  login(email: string, password: string) : Observable<AuthToken>{
    return this.client.post<AuthToken>(`${this.BASE_URL}/users/token/`, {email, password});
  }
  logout(){
    localStorage.removeItem('token');
  }
  register(email:string, username:string, firstName:string, lastName: string, password:string){
    return this.client.post(`${this.BASE_URL}/users/register/`,
      {
        'email':email,
        'username': username,
        'first_name':firstName,
        'last_name':lastName,
        'password':password
      });
  }
}
