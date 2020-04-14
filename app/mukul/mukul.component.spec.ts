import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MukulComponent } from './mukul.component';

describe('MukulComponent', () => {
  let component: MukulComponent;
  let fixture: ComponentFixture<MukulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MukulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MukulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
