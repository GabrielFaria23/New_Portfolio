import {Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  sidenavOpened: boolean;
  
  width: number;
  widthMaiorMenos920:boolean;

  constructor() { }
  
  ngOnInit(): void {
    if(window.innerWidth > 1050){
      this.widthMaiorMenos920 = true;
    }else{
      this.widthMaiorMenos920 =false;
    }
  }

  onResize(event) {
    this.width = event.target.innerWidth;
    console.log(this.width);
    
    if(this.width > 1050)
      this.widthMaiorMenos920 = true;
    else
      this.widthMaiorMenos920 = false;
  }

}
