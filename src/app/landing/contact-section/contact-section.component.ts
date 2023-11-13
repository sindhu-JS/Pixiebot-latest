import { Component, OnInit } from '@angular/core';
import { Countries, Services } from 'src/app/shared/model/countries.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MessageService } from "primeng/api";
import { ContactService } from "src/app/shared/service/contact.service";

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  public countries: Countries[] = countries;
  public servicesProvided:Services[] = services;
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

export var countries: Countries[] = [{ name: 'Alabama', 'abbreviation': 'AL' }, { name: 'Alaska', 'abbreviation': 'AK' }, { name: 'Arizona', 'abbreviation': 'AZ' }, { name: 'Arkansas', 'abbreviation': 'AR' }, { name: 'California', 'abbreviation': 'CA' }, { name: 'Colorado', 'abbreviation': 'CO' }, { name: 'Connecticut', 'abbreviation': 'CT' }, { name: 'Delaware', 'abbreviation': 'DE' }, { name: 'Florida', 'abbreviation': 'FL' }, { name: 'Georgia', 'abbreviation': 'GA' }, { name: 'Hawaii', 'abbreviation': 'HI' }, { name: 'Idaho', 'abbreviation': 'ID' }, { name: 'Illinois', 'abbreviation': 'IL' }, { name: 'Indiana', 'abbreviation': 'IN' }, { name: 'Iowa', 'abbreviation': 'IA' }, { name: 'Kansas', 'abbreviation': 'KS' }, { name: 'Kentucky', 'abbreviation': 'KY' }, { name: 'Louisiana', 'abbreviation': 'LA' }, { name: 'Maine', 'abbreviation': 'ME' }, { name: 'Maryland', 'abbreviation': 'MD' }, { name: 'Massachusetts', 'abbreviation': 'MA' }, { name: 'Michigan', 'abbreviation': 'MI' }, { name: 'Minnesota', 'abbreviation': 'MN' }, { name: 'Mississippi', 'abbreviation': 'MS' }, { name: 'Missouri', 'abbreviation': 'MO' }, { name: 'Montana', 'abbreviation': 'MT' }, { name: 'Nebraska', 'abbreviation': 'NE' }, { name: 'Nevada', 'abbreviation': 'NV' }, { name: 'New Hampshire', 'abbreviation': 'NH' }, { name: 'New Jersey', 'abbreviation': 'NJ' }, { name: 'New Mexico', 'abbreviation': 'NM' }, { name: 'New York', 'abbreviation': 'NY' }, { name: 'North Carolina', 'abbreviation': 'NC' }, { name: 'North Dakota', 'abbreviation': 'ND' }, { name: 'Ohio', 'abbreviation': 'OH' }, { name: 'Oklahoma', 'abbreviation': 'OK' }, { name: 'Oregon', 'abbreviation': 'OR' }, { name: 'Pennsylvania', 'abbreviation': 'PA' }, { name: 'Rhode Island', 'abbreviation': 'RI' }, { name: 'South Carolina', 'abbreviation': 'SC' }, { name: 'South Dakota', 'abbreviation': 'SD' }, { name: 'Tennessee', 'abbreviation': 'TN' }, { name: 'Texas', 'abbreviation': 'TX' }, { name: 'Utah', 'abbreviation': 'UT' }, { name: 'Vermont', 'abbreviation': 'VT' }, { name: 'Virginia', 'abbreviation': 'VA' }, { name: 'Washington', 'abbreviation': 'WA' }, { name: 'West Virginia', 'abbreviation': 'WV' }, { name: 'Wisconsin', 'abbreviation': 'WI' }, { name: 'Wyoming', 'abbreviation': 'WY' }];
export var services: Services[] = [
  {name: "UX Research"},
  {name: "Web and Mobile Design"},
  {name: "Branding Design"},
  {name: "Print and Packaging"},
  {name: "Development"},
  {name: "Social Media Marketing"}
]