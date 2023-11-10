import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/shared/model/countries.model';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {MessageService} from 'primeng/api';
import { ContactService } from 'src/app/shared/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public services:Services[] = services;
  public activeClass = 'home';
  constructor(private builder: FormBuilder,private contact: ContactService) {
    this.FormData = this.builder.group({
      name:this.name,
      email:this.email,
      phone:this.phone,
      message:this.message,
      services:this.services
    })
   }

  ngOnInit() {
    FormData: FormGroup;
    name = new FormControl('',Validators.required);
    phone = new FormControl('',Validators.required);
  email = new FormControl("",[Validators.required,Validators.email]);
  message = new FormControl('',Validators.required);
  services = new FormControl('',Validators.required);
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