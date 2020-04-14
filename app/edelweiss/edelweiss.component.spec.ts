import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdelweissComponent } from './edelweiss.component';

describe('EdelweissComponent', () => {
  let component: EdelweissComponent;
  let fixture: ComponentFixture<EdelweissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdelweissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdelweissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
