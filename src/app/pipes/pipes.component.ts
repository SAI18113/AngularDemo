import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  pipesRoute(){
    this.router.navigate(['/pipesdemo'])
  }
}
