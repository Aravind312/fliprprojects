import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  a : boolean =true;
  b :boolean =false;
  constructor() { }

  ngOnInit() {
  }
  privatecompanies()
  {
    this.a = true;
    this.b = false;
  }
  publiccompanies()
  {
    this.a = false;
    this.b = true;
  }
}
