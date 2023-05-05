import { Component ,OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {Organization} from "../data/info";
import {InfoService} from "../info.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class IdeasComponent implements OnInit {
  constructor(private infoService: InfoService, private authService:AuthService) { }
  orgs:Organization[] = []
  ngOnInit() {
    this.infoService.getOrganizations().subscribe( data =>{
      this.orgs = data;
    })
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  enterOrg(id:number){
    this.authService.getUser().subscribe(user =>{
      this.authService.enterToOrg(user.id, id).subscribe();
    });
  }
}
