import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }
getvalues(){
  //this.http.get('https://localhost:44389/api/Value').subscribe(
   // response=>{this.values=response;},
   // error=>{console.log(error);}
 // )
 this.http.get('https://localhost:5001/api/Value').subscribe(
   response=>{this.values=response;},
   //error=>{console.log(error);},

 )
}
}
