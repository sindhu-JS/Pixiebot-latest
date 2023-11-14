import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MessageService } from "primeng/api";
import { ContactService } from "../../service/contact.service";
import { Services } from "../../model/countries.model";


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public servicesProvided: Services[] = services;
  public activeClass = "home";
  submitted = false; // Initially, the form is not submitted
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private contact: ContactService,
    private messageService: MessageService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("[0-9]{10,14}")]],
      services: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  ngOnInit() {}

  active(val) {
    this.activeClass = val;
    document.querySelector(`#${val}`).scrollIntoView({ behavior: "smooth" });
  }

  setAsDirty() {
    // Mark all controls as dirty and touched
    for (const controlName in this.contactForm.controls) {
      if (this.contactForm.controls.hasOwnProperty(controlName)) {
        const control = this.contactForm.get(controlName);
        control.markAsDirty();
        control.markAsTouched();
      }
    }
  }

  onSubmit(): void {
    this.setAsDirty();
    if (!this.contactForm.valid) {
      return;
    }

    this.contact.postMessage(this.contactForm.value).subscribe(
      (response) => {
        //this.alert=true;
        this.contactForm.reset();
        this.messageService.add({
          severity: "success",
          summary: "Your Form Is Submitted Successfully!",
        });
        this.submitted = true;
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Oops, Something went wrong. Please try again later",
        });
        console.error({ error });
      }
    );
  }
}
export var services: Services[] = [
  { name: "UX Research" },
  { name: "Web and Mobile Design" },
  { name: "Branding Design" },
  { name: "Print and Packaging" },
  { name: "Development" },
  { name: "Social Media Marketing" },
  { name: "Others" },
];