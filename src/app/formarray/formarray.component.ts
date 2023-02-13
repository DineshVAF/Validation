import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  name = new FormControl();
  fname = new FormControl();

  constructor() { }

  ngOnInit(): void {

  }
  select(e: any) {
    debugger;
    var data = e.target.value;
    switch (data) {
      case "1":
        this.name.disable();
        alert("disable");
        break;
      case "2":
        this.name.enable();
        alert("visble");
        break;
    }
  }


  sel(e: any) {
    var date = e.target.value;
    switch (date) {
      case "3":
        this.fname.setValidators([Validators.required]);
        alert("disable");
        break;
      case "4":
        this.fname.setValidators(null);
        alert("visble");
        break;
    }
    this.fname.updateValueAndValidity();
  }


}
