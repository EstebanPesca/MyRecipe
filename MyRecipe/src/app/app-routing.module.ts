import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './views/catalog/catalog.component';
import { DescriptionComponent } from './views/description/description.component';
import { CatalogCarouselComponent } from './views/catalog-carousel/catalog-carousel.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'catalog', component:CatalogComponent},
  {path: 'catalog/carousel', component: CatalogCarouselComponent},
  {path: 'description', component:DescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
