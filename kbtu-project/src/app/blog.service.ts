import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post, posts} from "./data/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL="something"
  constructor(private http: HttpClient) { }

  getPosts():Observable<Post>{
    return this.http.get<Post>(`${this.BASE_URL}`)
  }
  addPost(newPost: Post){
    return this.http.post<Post>(`${this.BASE_URL}`, {})
  }
  updatePost(post:Post){
    return this.http.put<Post>(`${this.BASE_URL}`, {})
  }

}
