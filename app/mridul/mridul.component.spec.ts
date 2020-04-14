import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MridulComponent } from './mridul.component';

describe('MridulComponent', () => {
  let component: MridulComponent;
  let fixture: ComponentFixture<MridulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MridulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MridulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
