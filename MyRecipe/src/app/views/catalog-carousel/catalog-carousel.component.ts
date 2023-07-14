import { Component } from '@angular/core';
import { contentCatalog } from 'src/app/constants/data';

@Component({
  selector: 'app-catalog-carousel',
  templateUrl: './catalog-carousel.component.html',
  styleUrls: ['./catalog-carousel.component.css']
})
export class CatalogCarouselComponent {

  constructor(){}

  public recipes = contentCatalog;

}
