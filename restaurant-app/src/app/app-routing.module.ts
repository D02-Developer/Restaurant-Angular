import { HomeComponent } from './home/home.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { LoginRestaurantComponent } from './login-restaurant/login-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {component:AddRestaurantComponent, path:'add'},
  {component:UpdateRestaurantComponent, path:'update/:id'},
  {component:ViewRestaurantComponent, path:'view'},
  {component:LoginRestaurantComponent, path:'login'},
  {component:RegisterRestaurantComponent, path:'register'},
  {component:HomeComponent, path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
