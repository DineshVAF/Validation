import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-putform',
  templateUrl: './putform.component.html',
  styleUrls: ['./putform.component.scss']
})
export class PutformComponent implements OnInit {
  putform: FormGroup | any;
  submitted: boolean = false;
  constructor(private put: PostsService) { }

  ngOnInit(): void {
    this.putdata();
  }
  putdata(): void {
    this.putform = new FormGroup({
      'firstname': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      'lastname': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')])
    })
  }

  submit() {
    this.submitted = true;
    console.log(this.putform.value.id);
    console.log(this.putform.value.firstname);
    console.log(this.putform.value.lastname);
    const newFormData = { id: this.putform.value.id, firstname: this.putform.value.firstname, lastname: this.putform.value };
    // this.PostsService.addApi(newFormData).subscribe((data: any) => {
    //   console.log(data);
    // })


    alert(JSON.stringify(this.putform.value))
    this.put.addApi(this.putform.value).subscribe((result) => {
      console.log("Get Data From Service", result)
    })
  }

  update(constid: number) {
    const newFormData: any = {
      firstname: this.putform.controls.firstname.value,
      lastname: this.putform.controls.lastname.value
    }
    this.put.updateData(constid, newFormData).subscribe((data: any) => { })
  }

  delete(constid:number){
    this.put.deleteData(constid).subscribe((data:any)=>{
      
    });
  }
}
