import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  mygroup: FormGroup;
  user: FormGroup;
  ngOnInit() {
    /*  this.mygroup=new FormGroup({
      name:new FormControl('Anbu'),
      location:new FormControl("Colombo")
    }) */
    this.user = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      account: new FormGroup({// nested formFGroup
        email: new FormControl('',[Validators.required]),
        confirm: new FormControl('',[Validators.required]),
      }),
    });
  }
  onSubmit(data){
    console.log(data)
    // we can also get the forms value by the name of formGroup
    console.log(this.user.value,this.user.status)
  }
}
