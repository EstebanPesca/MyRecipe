import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { DescriptionComponent } from './views/description/description.component';
import { CatalogCarouselComponent } from './views/catalog-carousel/catalog-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
    CatalogCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
