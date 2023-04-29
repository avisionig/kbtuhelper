import { Component ,OnInit} from '@angular/core';
import { posts} from "../data/Post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  constructor() {
  }
  posts = [...posts].reverse()
  content:string = "";
  post(){
    this.posts.unshift({
      content: this.content,
      id: 4,
      author: "Admin",
      likes:0,
    })
    this.content="";
  }
  ngOnInit(): void{

  }
}
