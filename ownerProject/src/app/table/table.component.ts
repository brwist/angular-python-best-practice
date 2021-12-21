import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CommonService} from '../shared/commomservice';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mno: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });
  constructor(private commonservice:CommonService){}

  get f(){
    return this.form.controls;
  }
  
  submit(form1:any){
    this.commonservice.addData(this.form.value).subscribe((res)=>{
      alert(res)
    })
    this.form.reset();

  }
}
