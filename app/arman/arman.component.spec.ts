import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmanComponent } from './arman.component';

describe('ArmanComponent', () => {
  let component: ArmanComponent;
  let fixture: ComponentFixture<ArmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
