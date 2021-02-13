import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }
 public maritalStatus:Boolean;

 public MarriageStatus(value:Boolean):void{
    this.maritalStatus=value;
  }

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  
  onSubmit(contactForm)
  {
    console.log(contactForm.value);
var p=new PersonModel();   
    p.firstName=contactForm.value.firstname;
    p.lastName=contactForm.value.lastname;
    p.Email=contactForm.value.email;
    p.ismarried=contactForm.value.isMarried;
    p.gender=contactForm.value.gender;
    p.Country=contactForm.value.country;
    p.showData();
  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

 export class PersonModel
{
constructor()
{


}

firstname:string;
public get firstName()
{
  return this.firstname;
}
public set firstName(value)
{
  this.firstname=value;
}

lastname:string;
public get lastName()
{
  return this.lastname;
}
public set lastName(value)
{
  this.lastname=value;
}


email:string;
public get Email()
{
  return this.email;;
}
public set Email(value)
{
  this.email=value;
}

gender:string;
public get Gender()
{
  return this.gender;
}
public set Gender(value)
{
  this.gender=value;
}


ismarried:boolean;




country:string;
public get Country()
{
  return this.country;
}
public set Country(value)
{
  this.country=value;
}


showData():void{
  console.log("Details are");
console.log(this.firstName);
console.log(this.lastName);
console.log(this.email);
console.log(this.country);
console.log(this.gender);
console.log(this.ismarried);



}

}

