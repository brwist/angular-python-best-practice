import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient){}

getData() {
    return this.http.get('http://localhost:3001/getUsers');
  }
addData(user:any) {
  var formData = new FormData();
  formData.append("name", user.name);
  formData.append("address", user.address);
  formData.append("phone_number", user.mno);
  return this.http.post('http://localhost:3001/addUser',formData);
  }
}

