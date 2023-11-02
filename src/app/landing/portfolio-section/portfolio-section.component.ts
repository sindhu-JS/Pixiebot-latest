import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {
  portfolioOptions = {
    items: 2,
    center: true,
    nav: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
    loop: true
  }

  portfolio = [
    {
      img: 'assets/images/landing/portfolio/1.jpg',
      link: '/portfolio/centered-slide'
    },
    {
      img: 'assets/images/landing/portfolio/2.jpg',
      link: '/portfolio/full-width-4-grid'
    },
    {
      img: 'assets/images/landing/portfolio/3.jpg',
      link: '/portfolio/portfolio-parallex'
    }
  ]
}
