import { TestBed } from '@angular/core/testing';

import { ClaseService } from './clase.service';

describe('Clase', () => {
  let service: ClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
