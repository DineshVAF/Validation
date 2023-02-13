import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, ValidationErrors, ValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
 import Validation from './../dinesh-task/conform';

@Component({
  selector: 'app-dinesh-task',
  templateUrl: './dinesh-task.component.html',
  styleUrls: ['./dinesh-task.component.scss']
})
export class DineshTaskComponent implements OnInit {
 reactform:FormGroup|any;
  submitted: Boolean = false;

  get name(): FormControl {
    return this.reactform.get('name'.trim()) as FormControl;
  }
  get fnameControl(): FormControl {
    return this.reactform.get('fname') as FormControl;
  }
  get lname(): FormControl {
    return this.reactform.get('lname') as FormControl;
  }
  get email(): FormControl {
    return this.reactform.get('email') as FormControl;
  }
  get dob(): FormControl {
    return this.reactform.get('dob') as FormControl;
  }
  get gender(): FormControl {
    return this.reactform.get('gender') as FormControl;
  }
  get pass(): FormControl {
    return this.reactform.get('pass') as FormControl;
  }
  get cpassControl(): FormControl {
    return this.reactform.get('cpass') as FormControl;
  }
  get mobile(): FormControl {
    return this.reactform.get('mobile') as FormControl;
  }
  get nation(): FormControl {
    return this.reactform.get('nation') as FormControl;
  }
  get state(): FormControl {
    return this.reactform.get('state') as FormControl;
  }
  get check(): FormControl {
    return this.reactform.get('check') as FormControl;
  }
  // get f() { return this.reactform.controls; }

  constructor(private builder: FormBuilder) { }

  countryList = [
    { "countryname": "Indian" },
    { "countryname": "Russian" },
    { "countryname": "American" },
  ]

  stateList = [
    { "statename": "Tamilnadu" },
    { "statename": "Kerala" },
    { "statename": "Karnataka" },
    { "statename": "Andhra Pradesh" },
    { "statename": "Bihar" }
  ]
  ngOnInit(): void {
     this.reactformValidation();
   }

  reactformValidation(): void {
    this.reactform = this.builder.group({
      fname: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), this.noWhitespaceValidator()]],
      lname: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), this.noWhitespaceValidator(),]],
      name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      check: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      pass: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]],
      cpass: [null, [Validators.required]],
      nation: [null, [Validators.required]],
      state: [null, [Validators.required]]
    },
      {
        validator: Validation.match('pass', 'cpass')
      }
    );
  }


  onsubmit() {
    this.submitted = true;
    this.name?.setValue(this.fnameControl?.value + this.lname?.value)
    // this.cpass.setValue(this.pass.value);
    console.log('value', this.reactform.value);
    console.log('valid', this.reactform.valid);
  }
  reset() {
    console.log(this.reactform.value);
    this.reactform.reset();
  }

  noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhitespace = (control.value || '').trim().length === 0;
      return isWhitespace ? { whitespace: true } : null;
    };
  }
//   noWhitespaceValidator1(control: FormControl): ValidationErrors | null {
//     const isWhitespace = (control.value || '').trim().length === 0;
//     return isWhitespace ? { whitespace: true } : null;
//   }
// 
}


  //  this.reactform = new FormGroup({
  //   fname: new FormControl('', [Validators.required]),
  //   lname: new FormControl('', [Validators.required]),
  //   name: new FormGroup(''),
  //   gender: new FormControl('', [Validators.required]),
  //   dob: new FormControl('', [Validators.required]),
  //   mobile: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //   email: new FormControl('', [Validators.required,Validators.email]),
  //   pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  //   cpass: new FormControl('', [Validators.required]),
  //   nation: new FormControl('', [Validators.required]),
  //   state: new FormControl('', [Validators.required]),
  // });
