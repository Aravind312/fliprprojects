import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaifComponent } from './shaif.component';

describe('ShaifComponent', () => {
  let component: ShaifComponent;
  let fixture: ComponentFixture<ShaifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
