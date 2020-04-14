import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyeComponent } from './aye.component';

describe('AyeComponent', () => {
  let component: AyeComponent;
  let fixture: ComponentFixture<AyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
