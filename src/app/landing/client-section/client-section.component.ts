import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  brands = [
    { img: "assets/images/agency/slider/tringapp.png" },
    { img: "assets/images/agency/slider/dentalLogo.png" },
    { img: "assets/images/agency/slider/picaggo-logo.png" },
    { img: "assets/images/agency/slider/eatery.png" },
    { img: "assets/images/agency/slider/imotionLogo.png" }
  ]
  
  brandcarouselOptions= {
    items: 6,
        margin: 80,
        autoHeight: true,
        nav: false,
        dots:false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            320: {
                items: 2,
                margin: 10
            },
            360: {
                items: 3,
                margin: 20
            },
            480: {
                items: 4,
                margin: 30
            },
            767: {
                items: 4,
                margin: 30
            },
            991: {
                items: 5,
                margin: 20
            },
            992: {
                item:6

            }
        }
  }
}