import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomponents1Component } from './childcomponents1.component';

describe('Childcomponents1Component', () => {
  let component: Childcomponents1Component;
  let fixture: ComponentFixture<Childcomponents1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childcomponents1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childcomponents1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
