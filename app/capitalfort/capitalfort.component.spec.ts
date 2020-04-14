import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalfortComponent } from './capitalfort.component';

describe('CapitalfortComponent', () => {
  let component: CapitalfortComponent;
  let fixture: ComponentFixture<CapitalfortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalfortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
