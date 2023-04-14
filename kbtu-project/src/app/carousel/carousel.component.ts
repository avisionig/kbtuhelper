import { Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  imageObject = [{
    image: 'https://kbtu.edu.kz/images/new_baner_videokon_kaz.jpg',
    thumbImage: 'https://kbtu.edu.kz/images/new_baner_videokon_kaz.jpg'
  }, {
    image: 'https://kbtu.edu.kz/images/ban_29032023_kaz.jpg',
    thumbImage: 'https://kbtu.edu.kz/images/ban_29032023_kaz.jpg'
  }, {
    image: 'https://kbtu.edu.kz/images/ban_30032023_kaz.jpg',
    thumbImage: 'https://kbtu.edu.kz/images/ban_30032023_kaz.jpg'
  },{
    image: 'https://kbtu.edu.kz/images/olymp_2023_kaz.jpg',
    thumbImage: 'https://kbtu.edu.kz/images/olymp_2023_kaz.jpg'
  }, {
    image: 'https://kbtu.edu.kz/images/banner_conf_kaz.png',
    thumbImage: 'https://kbtu.edu.kz/images/banner_conf_kaz.png'
  }, {
    image: 'https://kbtu.edu.kz/images/sl_main_kz_001.jpeg',
    thumbImage: 'https://kbtu.edu.kz/images/sl_main_kz_001.jpeg'
  }];
}
