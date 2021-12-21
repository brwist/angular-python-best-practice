import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient){}

getData() {
    return this.http.get('');
  }
addData() {
    return this.http.post('',{});
  }
}

