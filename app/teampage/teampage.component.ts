import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.css']
})
export class TeampageComponent implements OnInit {
a:boolean=true;
b:boolean=false;
c:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  allbutton()
  {
    this.a=true;
    this.b=false;
    this.c=false;
  }
  itbutton()
  {
    this.a=false;
    this.b=true;
    this.c=false;
  }
  iabutton()
  {
    this.a=false;
    this.b=false;
    this.c=true;
  }

}
