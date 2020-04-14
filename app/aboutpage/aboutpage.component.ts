import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {
image1:boolean=true;
image2:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  imgbutton1()
  {
    this.image1=true;
    this.image2=false;
  }
  imgbutton2()
  {
    this.image1=false;
    this.image2=true;
  }

}
