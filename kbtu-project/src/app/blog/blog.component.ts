import { Component ,OnInit} from '@angular/core';
import {Post, Tag} from "../data/Post";
import {AuthService} from "../auth.service";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  constructor(private auth:AuthService, private blogService: BlogService) {
  }
  posts:Post[] = []
  tags:Tag[] = []
  content:string = "";
  currentUser = 0;
  tag_id = 1;
  ngOnInit(){
    this.getPosts();
    this.blogService.getTags().subscribe(data=>{
      this.tags = data.filter((tag) => tag.name !== null);
    })
    this.auth.getUser().subscribe(data =>{
      this.currentUser = data.id;
    })
  }
  getPosts(){
    this.blogService.getPosts().subscribe((data)=>{
        this.posts = data.reverse();
      }
    )
  }
  post(){
    let user;
    this.auth.getUser().subscribe(data=>{
        user = data;
      this.blogService.addPost(user.id, this.tag_id, this.content).subscribe(data =>{
        this.posts.unshift({
          author: data.author,
          content: data.content,
          id: data.id,
          tag: data.tag
        });
        this.content="";
      })
    });
  }
  onDelete(id: number){
    this.blogService.deletePost(id).subscribe(() =>{
      this.posts = this.posts.filter((x) => x.id !== id);
    })
  }
  filterPosts(tag: number){
    this.posts = this.posts.filter(x => x.tag == tag);
  }
}
