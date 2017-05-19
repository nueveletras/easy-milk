import { TestBed, inject } from '@angular/core/testing';

import { PotreroService } from './potrero.service';

describe('PotreroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PotreroService]
    });
  });

  it('should ...', inject([PotreroService], (service: PotreroService) => {
    expect(service).toBeTruthy();
  }));
});
