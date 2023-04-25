import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent {
  images = [
    { img: "https://images.squarespace-cdn.com/content/v1/595d33df5016e19c5a035344/1523288445477-USEGVQ27OSCV89WJ6Q0N/Art+House+North+Logo-17.png?format=750w"},
    { img: "https://acf.org.uk/images/Samples/Donor/volunteer_icon.png"},
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Democratic_Party_Logo.png/640px-Democratic_Party_Logo.png"},
    { img: "https://www.cardiffmetsu.co.uk/asset/Organisation/9601/Enactus(1).png?thumbnail_width=350&thumbnail_height=350&resize_type=ResizeFitAll"},
    { img: "https://images.squarespace-cdn.com/content/v1/595d33df5016e19c5a035344/1523288445477-USEGVQ27OSCV89WJ6Q0N/Art+House+North+Logo-17.png?format=750w"},
    { img: "https://acf.org.uk/images/Samples/Donor/volunteer_icon.png"},
    { img: "https://www.cardiffmetsu.co.uk/asset/Organisation/9601/Enactus(1).png?thumbnail_width=350&thumbnail_height=350&resize_type=ResizeFitAll"}
  ];

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay":true,
    "autoplaySpeed": 2000
  };
}
