import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostComponent} from "./post/post.component";
 import {Post, posts} from "./data/Post";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return posts
  }
  addPost(newPost: Post){

  }
  updatePost(post:Post){

  }

}
