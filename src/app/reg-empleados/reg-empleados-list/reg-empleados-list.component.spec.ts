import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEmpleadosListComponent } from './reg-empleados-list.component';

describe('RegEmpleadosListComponent', () => {
  let component: RegEmpleadosListComponent;
  let fixture: ComponentFixture<RegEmpleadosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEmpleadosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEmpleadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
