import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactiveForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
      branch: new FormControl('',Validators.required),
      gender: new FormControl('', Validators.required),
      tandc: new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    console.log(this.reactiveForm);
  }

}
