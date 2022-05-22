import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  constructor() { }
  title='pipes demo';
  amount=2000;
  number=1565.5687464;
  Title='Angular demo session';
  percentage=0.123;
  currentdate = new Date();
  ngOnInit(): void {
  }

}
