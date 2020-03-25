import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTopComponent } from './staff-top.component';

describe('StaffTopComponent', () => {
  let component: StaffTopComponent;
  let fixture: ComponentFixture<StaffTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
