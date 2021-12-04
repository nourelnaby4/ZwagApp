import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytodos',
  templateUrl: './mytodos.component.html',
  styleUrls: ['./mytodos.component.css']
})
export class MytodosComponent implements OnInit {
todolist=[
  {id:0,text:'fisrt todo',completed:false,}
  ,{id:1,text:'second todo',completed:true,},
  {id:3,text:'fisrt todo',completed:false,}
];;
myname=[{name:'ahmed nour el-naby'},{name:'yassen '},{name:'seaed'}]
  constructor() { }

  ngOnInit(): void {
  }

}
