import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router, RouterModule,Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './routing/loginpage/loginpage.component';
import { MyformComponent } from './routing/myform/myform.component';
import { HOMEComponent } from './routing/home/home.component';
import { ForgotpasswordComponent } from './routing/forgotpassword/forgotpassword.component';
import { ContactmeComponent } from './routing/contactme/contactme.component';

const appRoutes:Routes =[
  {path:'loginpage',component:LoginpageComponent},
  {path:'myform',component:MyformComponent},
  {path:'Home',component:HOMEComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'conatactme',component:ContactmeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    MyformComponent,
    HOMEComponent,
    ForgotpasswordComponent,
    ContactmeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {
  constructor(router:Router)
  {}
 }
