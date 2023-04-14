import {Component, Input} from '@angular/core';
import {Post} from "../data/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post
  likes: number = 0;

}
