import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router, RouterModule,Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingComponent } from './databinding/propertybinding/propertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { GOTcharactorComponent } from './databinding/gotcharactor/gotcharactor.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { ValidationformComponent } from './validationform/validationform.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import {DataserviceService} from './services/dataservice.service';
import { DataserviceComponent } from './services/dataservice/dataservice.component';
import { ListComponent } from './service/list/list.component';
import {MyserviceService} from './service/myservice.service';
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
    PropertybindingComponent,
    EventbindingComponent,
    CalculatorComponent,
    InterpolationComponent,
    TwowaybindingComponent,
    GOTcharactorComponent,
    StructuraldirectiveComponent,
    ValidationformComponent,
    AttributedirectiveComponent,
    DataserviceComponent,
    ListComponent,
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
  providers: [DataserviceService,MyserviceService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {
  constructor(router:Router)
  {}
 }
