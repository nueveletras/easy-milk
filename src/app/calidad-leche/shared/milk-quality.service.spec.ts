import { TestBed, inject } from '@angular/core/testing';

import { MilkQualityService } from './milk-quality.service';

describe('MilkQualityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilkQualityService]
    });
  });

  it('should ...', inject([MilkQualityService], (service: MilkQualityService) => {
    expect(service).toBeTruthy();
  }));
});
