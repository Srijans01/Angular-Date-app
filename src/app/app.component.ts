import { Component,OnInit } from '@angular/core';
import { MyappService } from './myapp.service';
import { myApp } from './myapp';
import { DatePipe } from '@angular/common';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  // public a

  title = 'my-app';
  // // md=Date.now();
  //app = 'Windstorm';
  //myd=new Date((new Date()).getTime() + 24*60*60*1000);
  // app: myApp = {
  //   datev:new Date((new Date()).getTime() + 24*60*60*1000)
  // };
  date=new Date((new Date()).getTime() + 24*60*60*1000);
  constructor(private _myappservicve:MyappService) {}
  giveDate()
  {
    // datev=new Date((new Date()).getTime() + 24*60*60*1000)
    this._myappservicve.getDate(this.date);
  }
}
