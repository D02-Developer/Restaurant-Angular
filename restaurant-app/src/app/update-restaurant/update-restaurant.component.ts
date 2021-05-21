import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  alert:boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')
  })
  
  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editRestaurant = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        mobile: new FormControl(result['mobile'])
      })
    })
  }

  updateResto() {
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result)=>{
      this.alert = true;
      console.log(result, "Data updated!");
    });
  }

  closeAlert() {
    this.alert = false;
  }

}
