import { Component } from '@angular/core';
import SwiperCore, { A11y, Pagination } from 'swiper/core';

SwiperCore.use([Pagination, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SwiperBugReproduce';

  onSwiper(swiper) {
    console.log('onswiper');
  }
}
