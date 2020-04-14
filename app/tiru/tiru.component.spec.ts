import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiruComponent } from './tiru.component';

describe('TiruComponent', () => {
  let component: TiruComponent;
  let fixture: ComponentFixture<TiruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
