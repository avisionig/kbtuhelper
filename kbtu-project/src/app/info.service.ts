import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {iEvent, News, Organization} from "./data/info";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  BASE_URL = "http://127.0.0.1:8000";
  constructor(private client: HttpClient) { }

  getNews(): Observable<News[]>{
    return this.client.get<News[]>(`${this.BASE_URL}/info/news`);
  }
  getEvents(): Observable<iEvent[]>{
    return this.client.get<iEvent[]>(`${this.BASE_URL}/info/events`);
  }
  getOrganizations(): Observable<Organization[]>{
    return  this.client.get<Organization[]>(`${this.BASE_URL}/info/organizations`);
  }
  getNew(id: number): Observable<News>{
    return this.client.get<News>(`${this.BASE_URL}/info/news/${id}`);
  }
  getEvent(id: number): Observable<Event>{
    return this.client.get<Event>(`${this.BASE_URL}/info/events/${id}`);
  }
  getOrgnization(id: number): Observable<Organization>{
    return this.client.get<Organization>(`${this.BASE_URL}/info/organizations/${id}`);
  }
  postNews(title: string, description:string): Observable<News>{
    return this.client.post<News>(`${this.BASE_URL}/info/news`, {
      'title':title,
      'description':description
    });
  }
  postEvent(title: string, description:string): Observable<iEvent>{
    return this.client.post<iEvent>(`${this.BASE_URL}/info/events`, {
      'title':title,
      'description':description
    });
  }
  postOrganization(org:Organization): Observable<Organization>{
    return  this.client.post<Organization>(`${this.BASE_URL}/info/organizations`, org);
  }
}
