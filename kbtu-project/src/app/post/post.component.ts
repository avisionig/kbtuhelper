import { Component} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  images = [{
    img: 'https://kbtu.edu.kz/images/new_baner_videokon_kaz.jpg',
  }, {
    img: 'https://kbtu.edu.kz/images/ban_29032023_kaz.jpg',
  }, {
    img: 'https://kbtu.edu.kz/images/ban_30032023_kaz.jpg',
  }, {
    img: 'https://kbtu.edu.kz/images/olymp_2023_kaz.jpg',
  }, {
    img: 'https://kbtu.edu.kz/images/banner_conf_kaz.png',
  }, {
    img: 'https://kbtu.edu.kz/images/sl_main_kz_001.jpeg',
  }];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2000
  };
}
