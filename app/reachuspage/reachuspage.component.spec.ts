import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachuspageComponent } from './reachuspage.component';

describe('ReachuspageComponent', () => {
  let component: ReachuspageComponent;
  let fixture: ComponentFixture<ReachuspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachuspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
