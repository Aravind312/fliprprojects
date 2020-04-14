import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatecompaniesComponent } from './privatecompanies.component';

describe('PrivatecompaniesComponent', () => {
  let component: PrivatecompaniesComponent;
  let fixture: ComponentFixture<PrivatecompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatecompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatecompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
