import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit {

  react: FormGroup | any;
  submitted: Boolean = false; 
  
  constructor(private api:PostsService) { }
  
  ngOnInit(): void {
    this.reactformValidation();
  }
  reactformValidation(): void {
    this.react= new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    'mobilenumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'emailaddress': new FormControl('', [Validators.required,Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    'roleid': new FormControl('', [Validators.required]),
  })
}
submit() {
  // this.submitted = true;
  // console.log('value', this.react.value);
  // console.log('valid', this.react.valid);
  alert(JSON.stringify(this.react.value))
  this.api.addApi(this.react.value).subscribe((result)=>{
    console.log("Get Data From Service",result)
  })
}
}

// this.react = this.builder.group({
  //   name: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
  //   mobile: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  //   email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  //   pass: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]],
  //   roleid: [null, [Validators.required]],
  // })
  // get name(): FormControl {
  //   return this.react.get('username') as FormControl;
  // }
  // get mobile(): FormControl {
  //   return this.react.get('mobile') as FormControl;
  // }
  // get email(): FormControl {
  //   return this.react.get('email') as FormControl;
  // }
  // get password(): FormControl {
  //   return this.react.get('password') as FormControl;
  // }
  // get roleid(): FormControl {
  //   return this.react.get('roleid') as FormControl;
  // }