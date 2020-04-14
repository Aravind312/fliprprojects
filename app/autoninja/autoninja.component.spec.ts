import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoninjaComponent } from './autoninja.component';

describe('AutoninjaComponent', () => {
  let component: AutoninjaComponent;
  let fixture: ComponentFixture<AutoninjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoninjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoninjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
