import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { contentCatalog } from 'src/app/constants/data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  constructor (private router:Router){}

  public recipes = contentCatalog;

  public viewMore(info:string){
    this.router.navigateByUrl('/description');
  }

}
