import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="pipedemoComponent";
  todaydate="12/1/2021";
   todayTime=new Date(2021,2,12,5);
   months=["Jan","Feb","Mar","Apr","May","June","July","Aug"];
   jsonval={"CategoryName": "Lunch",
   "Description": "Good Lunch"};

}
