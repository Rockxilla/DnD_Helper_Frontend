import { TestBed } from '@angular/core/testing';

import { RazaService } from './raza.service';

describe('Raza', () => {
  let service: RazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
