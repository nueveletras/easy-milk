import { TestBed, inject } from '@angular/core/testing';

import { RegNovedadesSaludService } from './reg-novedades-salud.service';

describe('RegNovedadesSaludService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegNovedadesSaludService]
    });
  });

  it('should ...', inject([RegNovedadesSaludService], (service: RegNovedadesSaludService) => {
    expect(service).toBeTruthy();
  }));
});
