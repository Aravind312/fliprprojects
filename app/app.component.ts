import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p:boolean=false;
  t:boolean=false;
  a:boolean=false;
  n:boolean=false;
  r:boolean=false;
  title = 'fliprproject';
  portfolio()
  {
  this.p=true;
  this.t=false;
  this.a=false;
  this.n=false;
  this.r=false;
  }
  teampage()
  {
  this.p=false;
  this.t=true;
  this.a=false;
  this.n=false;
  this.r=false;
  }
  aboutpage()
  {
  this.p=false;
  this.t=false;
  this.a=true;
  this.n=false;
  this.r=false;
  }
  newspage()
  {
  this.p=false;
  this.t=false;
  this.a=false;
  this.n=true;
  this.r=false;
  }
  reachuspage()
  {
  this.p=false;
  this.t=false;
  this.a=false;
  this.n=false;
  this.r=true;
  }
}
