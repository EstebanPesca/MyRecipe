import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCarouselComponent } from './catalog-carousel.component';


describe('CatalogCarouselComponent', () => {
  let component: CatalogCarouselComponent;
  let fixture: ComponentFixture<CatalogCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogCarouselComponent]
    });
    fixture = TestBed.createComponent(CatalogCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
