import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckoComponent } from './acko.component';

describe('AckoComponent', () => {
  let component: AckoComponent;
  let fixture: ComponentFixture<AckoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
