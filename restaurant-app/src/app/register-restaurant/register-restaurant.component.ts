import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  alert:boolean = false;
  createUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })
  
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }

  regUser() {
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result, "Data created!");
      this.alert = true;
    })
  }

  closeAlert() {
    this.alert = false;
  }

}
