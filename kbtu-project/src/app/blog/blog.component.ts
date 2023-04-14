import { Component ,OnInit} from '@angular/core';
import {BlogService} from "../blog.service";
import {Post, posts} from "../data/Post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  constructor() {
  }
  posts = [...posts]
  ngOnInit(): void{

  }
  // addPost(post:Post){
  //   this.blogService.addPost(post)
  // }
}
