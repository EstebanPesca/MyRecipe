import { Injectable } from '@angular/core';
import { contentCatalog } from 'src/app/constants/data';
import { pathOrigin } from 'src/app/interface/data';

@Injectable({
  providedIn: 'root'
})
export class CatalogInfoService {

  public infoCatalog = contentCatalog;
  public info: any = [];
  private pathOrigin: pathOrigin = {name: '', path:''};

  constructor() { }

  sendInfo(name: string) {
    const recipeInfo = contentCatalog.filter((item) => item.name === name);
    if (recipeInfo) {
      this.info = recipeInfo;
    }
  }

  returnInfo() {
    return this.info;
  }

  setPathOrigin(name:string, path:string) {
    this.pathOrigin.name = name;
    this.pathOrigin.path = path;

  }

  getPathOrigin():pathOrigin {
    return this.pathOrigin;
   }


}
