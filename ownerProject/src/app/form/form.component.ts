
import { CommonService } from '../shared/commomservice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  address: string;
  phone_number: number;
}

 @Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  displayedColumns: string[] = ['name', 'address', 'phone_number'];
  dataSource : any;
   response :any
   searchform = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(private commonservice: CommonService){}
  ngOnInit() {
    this.commonservice.getData().subscribe((res)=>{
      this.response = res
      this.dataSource = this.response.data;
    })
}
submit()
{
  this.commonservice.getData().subscribe((res)=>{
    this.response = res
    this.dataSource = this.response.data;
  })
}

}