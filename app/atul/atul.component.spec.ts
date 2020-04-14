import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtulComponent } from './atul.component';

describe('AtulComponent', () => {
  let component: AtulComponent;
  let fixture: ComponentFixture<AtulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
