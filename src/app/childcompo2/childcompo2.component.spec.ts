import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcompo2Component } from './childcompo2.component';

describe('Childcompo2Component', () => {
  let component: Childcompo2Component;
  let fixture: ComponentFixture<Childcompo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childcompo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childcompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
