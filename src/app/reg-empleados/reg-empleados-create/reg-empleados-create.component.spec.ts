import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEmpleadosCreateComponent } from './reg-empleados-create.component';

describe('RegEmpleadosCreateComponent', () => {
  let component: RegEmpleadosCreateComponent;
  let fixture: ComponentFixture<RegEmpleadosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEmpleadosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEmpleadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
