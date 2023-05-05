import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post, Tag} from "./data/Post";
import {Observable} from "rxjs";
import {User} from "./data/User";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL="http://127.0.0.1:8000"
  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.BASE_URL}/blog/posts/`)
  }

  getAuthor(id: number): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users/${id}/`)
  }
  addPost(author: number, tag: number, content: string){
    return this.http.post<Post>(`${this.BASE_URL}/blog/posts/`, {
      author: author,
      tag: tag,
      content: content
    })
  }
  updatePost(content: string, id: number){
    return this.http.put<Post>(`${this.BASE_URL}/blog/posts/${id}`, {
      'content': content
    })
  }
  deletePost(id:number){
    return this.http.delete(`${this.BASE_URL}/blog/posts/${id}`);
  }
  getTag(id:number): Observable<Tag>{
    return this.http.get<Tag>(`${this.BASE_URL}/blog/tags/${id}`)
  }
  getTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(`${this.BASE_URL}/blog/tags/`)
  }
}
