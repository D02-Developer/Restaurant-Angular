import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {

alert:boolean = false;
  email!: string;
  password!: string;

  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
  }

  logIn() {
    // console.log(this.email);
    // if(this.email == "dhairya@gmail.com" && this.password == "12345") {
    //   this.router.navigate[("../view")]
    // }
    // else {
    //   alert("Wrong Email or Password!")
    // }
  }

}
