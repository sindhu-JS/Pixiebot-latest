import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent {
  testimonialCarouselOptions= {
    items: 3,
    margin: 65,
    nav: true,
    dots: false,
    navText: ['<img src="assets/images/agency/testimonial/left.png">', '<img src="assets/images/agency/testimonial/right.png">'],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        575: {
            items:2,
            margin: 10
        },
        991: {
            items: 2,
            margin: 30
        },
        1199: {
            items: 3,
            margin: 30
        }
    }
  }

  users = [
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"Amazing design studio! Their creativity, professionalism, and attention to detail surpassed our needs. Highly recommended!"
    },
    { 
      img:"assets/images/agency/testimonial/2.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"Our partnership with Pixiebot exceeded our expectations – their creativity and expertise transformed our online presence."
    },
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"Impressed by Pixiebot's results-driven approach; they not only met but exceeded our digital marketing goals."
    },
    { 
      img:"assets/images/agency/testimonial/2.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"The Pixiebot's branding design surpassed our expectations, creatively capturing our essence and leaving a lasting impact on our audience."
    }
  ]

  
}

