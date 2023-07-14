import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogData } from 'src/app/interface/data';
import { CatalogInfoService } from 'src/app/services/catalog/catalog-info.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  public infoRecipe: CatalogData[] = [];
  public href: string = '';

  constructor(private ruoter:Router, private service: CatalogInfoService){}

  // catalog = "";

  ngOnInit(): void{
    this.infoRecipe = this.service.returnInfo();
  }

}
