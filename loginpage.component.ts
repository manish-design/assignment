import { Component, OnInit } from '@angular/core';
import {loginform} from './loginpage';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  

  users:loginform[]=[];

  form:FormGroup;

  constructor(private router:Router) {
    this.form=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.email,Validators.required]),
      age:new FormControl('',Validators.required),
      mobilenumber:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      home:new FormControl('',Validators.required),
      company:new FormControl('',Validators.required),
    })
   }

   gotoemployeelist()
   {
     this.users.push(this.form.value)
   }

  ngOnInit(): void {
    }

}
