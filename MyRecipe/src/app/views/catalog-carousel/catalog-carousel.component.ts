import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { contentCatalog } from 'src/app/constants/data';
import { CatalogInfoService } from 'src/app/services/catalog/catalog-info.service';

@Component({
  selector: 'app-catalog-carousel',
  templateUrl: './catalog-carousel.component.html',
  styleUrls: ['./catalog-carousel.component.css']
})
export class CatalogCarouselComponent {

  public recipes = contentCatalog;

  constructor(private router:Router, private service:CatalogInfoService){}

  // sending the data's recipe and the path's name and the path

  public moreDescription(info: string){
    this.router.navigateByUrl('/description');
    this.service.sendInfo(info);
    this.service.setPathOrigin('Catalogo 2','/catalog/carousel');
  }

}
