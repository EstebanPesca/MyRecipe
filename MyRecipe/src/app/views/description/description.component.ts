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

    this.infoRecipe = this.service.returnInfo();
    this.pathOrigin = this.service.getPathOrigin();

    if(!this.pathOrigin.path){
      this.router.navigateByUrl('/catalog');
    }
  }

}
