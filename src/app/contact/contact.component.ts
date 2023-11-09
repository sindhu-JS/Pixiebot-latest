import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/shared/model/countries.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public services:Services[] = services;
  public activeClass = 'home';
  constructor() { }

  ngOnInit() {
  }
  active(val) {
    this.activeClass = val;
    document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
  }
}
export var services: Services[] = [
  {name: " "},
  {name: "UX Research"},
  {name: "Web and Mobile Design"},
  {name: "Branding Design"},
  {name: "Print and Packaging"},
  {name: "Development"},
  {name: "Social Media Marketing"}
]