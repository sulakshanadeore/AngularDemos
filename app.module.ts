import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [

       AppComponent,
       CustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
