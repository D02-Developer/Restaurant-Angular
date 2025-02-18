import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/resto";
  regURL = "http://localhost:3000/users";

  constructor(private _http:HttpClient) { }
  getRestoView() {
    return this._http.get(this.URL);
  }
  
  addResto(data:any) {
    return this._http.post(this.URL, data);
  }

  deleteResto(id:any) {
    return this._http.delete(`${this.URL}/${id}`);
  }

  getCurrentData(id:any) {
    return this._http.get(`${this.URL}/${id}`);
  }

  updateResto(id:any, data:any) {
    return this._http.put(`${this.URL}/${id}`, data);
  }

  createUser(data:any) {
    return this._http.post(this.regURL, data);
  }
}
