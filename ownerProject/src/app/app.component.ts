import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mno: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(form1:any){
    console.log(this.form.value, form1);
  }
}
