import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    // urls catalogs

    public catalog : string = '/catalog';
    public catalogCarousel : string = '/catalog/carousel';

}
