import { Component, Input } from '@angular/core';
import {Post} from "../data/Post";
@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent {
  @Input() post!: Post
  likes: number = 0;
  likeActive = false;
  putLike(){
    this.likeActive = !this.likeActive;
    if(this.likeActive){
      this.likes++;
    }
    else{
      this.likes--;
    }
  }
}
