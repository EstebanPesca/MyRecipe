import { Injectable } from '@angular/core';
import { contentCatalog } from 'src/app/constants/data';
import { pathOrigin } from 'src/app/interface/data';

@Injectable({
  providedIn: 'root'
})
export class CatalogInfoService {

  // declaring local variables

  public infoCatalog = contentCatalog;
  public info: any = [];
  private pathOrigin: pathOrigin = {name: '', path:''};

  constructor() { }

  // in this function is called in the catalog.component.ts and catalog-carousel.component.ts,
  // and their send the recipe name, then it save all the object with the stucture in info(variable)

  sendInfo(name: string) {
    const recipeInfo = contentCatalog.filter((item) => item.name === name);
    if (recipeInfo) {
      this.info = recipeInfo;
    }
  }

  // in this function return the recipe information, which was assigned in the info (variable)

  returnInfo() {
    return this.info;
  }

  // the setPathOrigin use the structure originPath and save the name of the path and the path

  setPathOrigin(name:string, path:string) {
    this.pathOrigin.name = name;
    this.pathOrigin.path = path;
  }

  // and the getPathOrigin return the objetc pathOrigin

  getPathOrigin():pathOrigin {
    return this.pathOrigin;
   }

}
