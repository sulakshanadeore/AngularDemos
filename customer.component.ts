import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
custid:string="101";
  constructor() { }

  ngOnInit(): void {
  }

 months=['Jan','Feb','Mar','Apr'];
//dropdown click
selectmonth(event:any)
{
  alert('Month changed');
  console.log("Month changed");
}



 //button click
 acceptdata(event:any)
  {
    alert('button clicked');
    alert()
    console.log(event);
  }

}
