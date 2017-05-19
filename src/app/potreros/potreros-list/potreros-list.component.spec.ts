import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotrerosListComponent } from './potreros-list.component';

describe('PotrerosListComponent', () => {
  let component: PotrerosListComponent;
  let fixture: ComponentFixture<PotrerosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotrerosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotrerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
