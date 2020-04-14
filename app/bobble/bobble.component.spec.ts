import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobbleComponent } from './bobble.component';

describe('BobbleComponent', () => {
  let component: BobbleComponent;
  let fixture: ComponentFixture<BobbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
