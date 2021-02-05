import { Component,OnInit } from '@angular/core';
import { MyappService } from '../myapp.service';
 
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit{
  

  constructor(private _myappservicve:MyappService) {}
  d1=new Date();
  ngOnInit()
  {
    this._myappservicve.datem1$.subscribe(
        message => {
          alert(this.d1);
        }
    );
  }
}
