import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeBreakButtonComponent } from './take-break-button.component';

describe('TakeBreakButtonComponent', () => {
  let component: TakeBreakButtonComponent;
  let fixture: ComponentFixture<TakeBreakButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeBreakButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeBreakButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
