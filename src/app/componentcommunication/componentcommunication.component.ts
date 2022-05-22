import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componentcommunication',
  templateUrl: './componentcommunication.component.html',
  styleUrls: ['./componentcommunication.component.css']
})
export class ComponentcommunicationComponent implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  partochiRoute(){
    this.router.navigate(['/parenttochild'])
  }

}
