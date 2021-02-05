import { Injectable } from '@angular/core';
import { myApp } from './myapp';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  private _datem=new Subject<Date>();
  datem1$=this._datem.asObservable();
  
  constructor() { }

  // myd=new Date();

  // getDate(){
  //   return Date.now();
  // }

  getDate(message : Date)// stub
  {
    this._datem.next(message);
  }
}
