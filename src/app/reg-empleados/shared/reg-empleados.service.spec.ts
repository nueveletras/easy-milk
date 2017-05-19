import { TestBed, inject } from '@angular/core/testing';

import { RegEmpleadosService } from './reg-empleados.service';

describe('RegEmpleadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegEmpleadosService]
    });
  });

  it('should ...', inject([RegEmpleadosService], (service: RegEmpleadosService) => {
    expect(service).toBeTruthy();
  }));
});
