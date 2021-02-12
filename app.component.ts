import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproj';
 
  getDateData():any{
    var d=new Date();
    var d1= d.getDate();
   var month=d.getMonth() +1;
   var y=d.getFullYear();
     return d1 +"/" + month + "/" + y;


  }
  
  todaysDate:any=this.getDateData();

  months=['Jan','Feb','Mar','Apr'];

  status:boolean=true;

  result:boolean=true;



}
