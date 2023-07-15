import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogData, pathOrigin } from 'src/app/interface/data';
import { CatalogInfoService } from 'src/app/services/catalog/catalog-info.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  public infoRecipe: CatalogData[] = [];
  public pathOrigin?: pathOrigin;

  constructor(private router:Router, private service: CatalogInfoService){}

  ngOnInit(): void{

    // getting all the information about the recipes
    this.infoRecipe = this.service.returnInfo();
    // getting the path's name and the path
    this.pathOrigin = this.service.getPathOrigin();

    // this if, valid if the user reload the page, this comeback to the first catalog
    // and if he tries to go to the url without a previous path, he comebacks to the catalog

    if(!this.pathOrigin.path){
      this.router.navigateByUrl('/catalog');
    }
  }

}
