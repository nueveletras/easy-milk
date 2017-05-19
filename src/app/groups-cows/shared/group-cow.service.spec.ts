import { TestBed, inject } from '@angular/core/testing';

import { GroupCowService } from './group-cow.service';

describe('GroupCowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupCowService]
    });
  });

  it('should ...', inject([GroupCowService], (service: GroupCowService) => {
    expect(service).toBeTruthy();
  }));
});
