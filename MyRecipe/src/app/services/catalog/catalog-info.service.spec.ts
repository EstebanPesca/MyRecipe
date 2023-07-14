import { TestBed } from '@angular/core/testing';

import { CatalogInfoService } from './catalog-info.service';

describe('CatalogInfoService', () => {
  let service: CatalogInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
