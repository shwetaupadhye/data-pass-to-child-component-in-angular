import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomp3Component } from './childcomp3.component';

describe('Childcomp3Component', () => {
  let component: Childcomp3Component;
  let fixture: ComponentFixture<Childcomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childcomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
