import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTopComponent } from './manager-top.component';

describe('ManagerTopComponent', () => {
  let component: ManagerTopComponent;
  let fixture: ComponentFixture<ManagerTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
