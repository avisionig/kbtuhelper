import { Component } from '@angular/core';

export class Info{
  constructor(public name: string,
              public surname: string,
              public phone: number,
              public faculty: string,
  )
  { }
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  in: Info = new Info("", "", 0, "");
  info: Info[] = [];

  faculty: string[] = ["SCHOOL OF GEOLOGY",
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

  addInfo() {
    this.info.push(new Info(this.in.name, this.in.surname, this.in.phone, this.in.faculty));
  }
}
