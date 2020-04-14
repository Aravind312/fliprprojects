import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiemComponent } from './fiem.component';

describe('FiemComponent', () => {
  let component: FiemComponent;
  let fixture: ComponentFixture<FiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
