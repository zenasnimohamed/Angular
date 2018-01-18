import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info={
    name : "Mohamed",
    mail : "totot@gmail.com",
    tele : "069631475"
  }
comments= [
  {date: new Date(), message : "Cardpro"},
  {date: new Date(), message : "Cardpro"},
  {date: new Date(), message : "Cardpro"},
]

  constructor() { }

  ngOnInit() {
  }

}
