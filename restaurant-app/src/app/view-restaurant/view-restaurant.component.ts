import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

public collection:any = [];
alert:boolean = false;
  constructor(private CommonService:CommonService) { }

  ngOnInit(): void {
    this.CommonService.getRestoView().subscribe((result)=>{
      this.collection = result;
      console.log(this.collection);
    });
  }
  
  deleteResto(resto:any) {
    this.collection.splice(resto.id, -1);
    this.CommonService.deleteResto(resto).subscribe((result)=>{
      console.log(result, "Data is deleted!");
      this.alert = true;
    })
  }

  closeAlert() {
    this.alert = false;
  }

}
