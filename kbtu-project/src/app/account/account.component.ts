import { Component } from '@angular/core';
import {User} from "../data/User";
import {AuthService} from "../auth.service";
import {Organization} from "../data/info";
import {InfoService} from "../info.service";
import {Post} from "../data/Post";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  userposts: Post[] = []
  id = 0;
  name = ''
  email = ''
  org = '';
  faculty = '';
  ngOnInit(){
    this.authService.getUser().subscribe(user =>{
      this.id = user.id;
      this.name = user.first_name + " " + user.last_name;
      this.email = user.email;
      this.faculty = user.faculty;
      this.infoService.getOrgnization(user.organization).subscribe(data =>{
        this.org = data.name;
      })
    })
    this.blogService.getPosts().subscribe(data =>{
      this.userposts = data.filter(x => x.author == this.id);
    })
  }
  constructor(private authService:AuthService, private infoService:InfoService, private blogService: BlogService) {
  }
  faculties: string[] = ["SCHOOL OF GEOLOGY",
    "SCHOOL OF ENERGY, OIL AND GAS INDUSTRY",
    "SCHOOL OF INFORMATION TECHNOLOGY AND ENGINEERING",
    "SCHOOL OF NATURAL AND SOCIAL SCIENCES",
    "BUSINESS SCHOOL",
    "INTERNATIONAL SCHOOL OF ECONOMICS",
    "SCHOOL OF APPLIED MATHEMATICS ",
    "KAZAKHSTAN MARITIME ACADEMY ",
    "SCHOOL OF CHEMICAL ENGINEERING",
    "SCHOOL OF MATERIALS SCIENCE AND GREEN TECHNOLOGIES"
  ];
  save(){
    this.authService.updateFaculty(this.id,this.faculty).subscribe();
  }
  onDelete(id: number){
    this.blogService.deletePost(id).subscribe(() =>{
      this.userposts = this.userposts.filter((x) => x.id !== id);
    })
  }
}
