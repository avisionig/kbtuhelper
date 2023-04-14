import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent{

  constructor(
    private route: ActivatedRoute,
  ) {}


}
