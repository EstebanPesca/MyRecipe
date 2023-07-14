import { Injectable } from '@angular/core';
import { contentCatalog } from 'src/app/constants/data';

@Injectable({
  providedIn: 'root'
})
export class CatalogInfoService {

  public infoCatalog = contentCatalog;
  public info: any =  [];

  constructor() { }

  sendInfo(name:string){
    const recipeInfo = contentCatalog.filter((item) => item.name === name);
    if (recipeInfo){
      this.info = recipeInfo;
    }
  }

  returnInfo(){
    return this.info;
  }

}
