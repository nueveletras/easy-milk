import { TestBed, inject } from '@angular/core/testing';
import { Cow } from './cow.model';
import { CowService } from './cow.service';

describe('CowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CowService]
    });
  });

  it('should ...', inject([CowService], (service: CowService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllCows()', () => {
    it('should return an empty array by default', inject([CowService], (service: CowService) => {
      expect(service.getAllCows()).toEqual([]);
    }));

    it('should return all cows', inject([CowService], (service: CowService) => {
      let cow1 = new Cow({ id: 10, name: 'Blanquita', birthDate: new Date('09/18/2013') });
      let cow2 = new Cow({ id: 20, name: 'Manchas', buyDate: new Date('10/04/2012') });
      service.addCow(cow1);
      service.addCow(cow2);
      expect(service.getAllCows()).toEqual([cow1, cow2]);
    }));
  });

  describe('#save(cow)', () => {
    it('should save a cow', inject([CowService], (service: CowService) => {
      let cow1 = new Cow({ name: 'Blanquita', birthDate: new Date('09/18/2013') });
      let cow2 = new Cow({ id: 10, name: 'Manchas', buyDate: new Date('10/04/2012') });
      service.addCow(cow1);
      service.addCow(cow2);
      expect(service.getCowById(1)).toEqual(cow1);
      expect(service.getCowById(10)).toEqual(cow2);
    }));
  });

  describe('#deleteCowById(id)', () => {

    it('should remove cow with the corresponding id', inject([CowService], (service: CowService) => {
      let cow1 = new Cow({ name: 'Blanquita', birthDate: new Date('09/18/2013') });
      let cow2 = new Cow({ id: 10, name: 'Manchas', buyDate: new Date('10/04/2012') });
      service.addCow(cow1);
      service.addCow(cow2);
      expect(service.getAllCows()).toEqual([cow1, cow2]);
      service.deleteCowById(1);
      expect(service.getAllCows()).toEqual([cow2]);
      service.deleteCowById(10);
      expect(service.getAllCows()).toEqual([]);
    }));

    it('should not removing anything if cow with corresponding id is not found', inject([CowService], (service: CowService) => {
      let cow1 = new Cow({ name: 'Blanquita', birthDate: new Date('09/18/2013') });
      let cow2 = new Cow({ id: 10, name: 'Manchas', buyDate: new Date('10/04/2012') });
      service.addCow(cow1);
      service.addCow(cow2);
      expect(service.getAllCows()).toEqual([cow1, cow2]);
      service.deleteCowById(2);
      expect(service.getAllCows()).toEqual([cow1, cow2]);
    }));

  });

  describe('#updateCowById(id, values)', () => {

    it('should return cow with the corresponding id and updated data', inject([CowService], (service: CowService) => {
      let cow = new Cow({ name: 'Blanquita', birthDate: new Date('09/18/2013') });
      service.addCow(cow);
      let updatedCow = service.updateCowById(1, {
        name: 'Rosita'
      });
      expect(updatedCow.name).toEqual('Rosita');
    }));

    it('should return null if cow is not found', inject([CowService], (service: CowService) => {
      let cow = new Cow({ name: 'Blanquita', birthDate: new Date('09/18/2013') });
      service.addCow(cow);
      let updatedCow = service.updateCowById(2, {
        name: 'Pecas'
      });
      expect(updatedCow).toEqual(null);
    }));

  });
});
