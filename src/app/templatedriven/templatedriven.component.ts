import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { user } from '../user';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent {
 myForm:FormGroup;
  usermodel= new user();
 

  onSubmit() {
    console.log(this.usermodel);
  }

}
