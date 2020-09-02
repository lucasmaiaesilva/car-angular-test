import { Component } from '@angular/core';
import  *  as  data  from  './mockdata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  candidate = 'Lucas Maia e Silva';
  products: any = (data as any).default;
  imgThumb: {
    src: 'https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png',
    alt: 'Carro Thumbnail',
  }
}
