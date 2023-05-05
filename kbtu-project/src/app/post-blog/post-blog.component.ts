import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post, Tag} from "../data/Post";
import {User} from "../data/User";
import {BlogService} from "../blog.service";
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit{
  constructor(private blogService: BlogService, private authService:AuthService) {
  }
  @Input() post!: Post;
  @Input() author_id!: number;
  @Input() tag_id!: number;
  @Output() remove = new EventEmitter()
  content: string = "";
  user!: User;
  tag: string = '';
  currentUser = 0;
  active = false;
  ngOnInit(){
    this.blogService.getAuthor(this.author_id).subscribe(data =>{
        this.user = data;
      }
    )
    if(this.post.tag != 1)this.blogService.getTag(this.tag_id).subscribe(data =>{
      console.log(data)
      this.tag = data.name;
    })
    this.authService.getUser().subscribe(data=>{
      this.currentUser = data.id;
    })
  }
  updateButton(){
    this.active = true;

  }
  updatePost(){
    this.blogService.updatePost(this.content, this.post.id).subscribe(upd =>{
      this.post.content = this.content;
      this.active = false;
      this.content = "";
    });
  }
  deletePost(){
    this.remove.emit(this.post.id);
  }
  // likes: number = 0;
  // likeActive = false;
  // putLike(){
  //   this.likeActive = !this.likeActive;
  //   if(this.likeActive){
  //     this.likes++;
  //   }
  //   else{
  //     this.likes--;
  //   }
  // }
}
