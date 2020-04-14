import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliccompaniesComponent } from './publiccompanies.component';

describe('PubliccompaniesComponent', () => {
  let component: PubliccompaniesComponent;
  let fixture: ComponentFixture<PubliccompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliccompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliccompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
