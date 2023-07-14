import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { contentCatalog } from 'src/app/constants/data';
import { CatalogInfoService } from 'src/app/services/catalog/catalog-info.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  public recipes = contentCatalog;

  constructor (private router:Router, private service:CatalogInfoService){}

  public viewMore(info:string){
    this.router.navigateByUrl('/description');
    this.service.sendInfo(info);
  }

}
